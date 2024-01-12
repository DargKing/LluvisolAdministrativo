'use client'
import { useState, useEffect } from 'react'
import ButtonGroup from "../components/ButtonGroup";
import Select from "../components/Select";
import Table from "../components/Table";
import Input from '../components/Input';
import { ButtonGroupOptions, HeaderTable } from "../interfaces/UI-types"
import { ToastContainer, toast } from "react-toastify"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { eliminarDeTabla, downloadTable } from '@/controller/peticiones'
import Modal from '../components/Modal';

export default function Page() {
    const [codigo, setCodigo] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [cantidadInicial, setCantidadInicial] = useState("")
    const [estadoModalEdicion, setEstadoModalEdicion] = useState(false)


    const [datosTabla, setDatosTabla] = useState(null)

    const headerTablaInventario: HeaderTable = {
        columns: ["Codigo", "Descripcion", "Cantidad Inicial", "Cantidad Actual"],
        keyName: ["codigo", "descripcion", "cantidadInicial", "cantidadActual"]
    }


    const cleanInputs = () => {
        setCodigo("")
        setDescripcion("")
        setCantidadInicial("")
    }

    const actualizarTabla = () => {
        downloadTable(setDatosTabla, (new AbortController()).signal, (exito, response) => {
            if(exito){
                toast.success("Se ha actualizado con exito la tabla")
            } else {
                toast.error("Ha sucedido un error al actualizar la tabla, " + response)
            }
        })
    }

    const agregarATabla = async (e: any) => {
        const request = await fetch("/api/inventario/items", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                accept: "application/json"
            },
            body: JSON.stringify({
                codigo,
                descripcion,
                cantidadInicial: parseInt(cantidadInicial)
            })
        })

        const response = await request.json()

        if (request.status == 201) {
            cleanInputs()
            actualizarTabla()
        } else {
            toast.error(response)
        }
    }


    const botonAgregarATabla: ButtonGroupOptions[] = [{
        label: "Agregar al Inventario",
        function: agregarATabla,
        color: "success"
    }]

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal

        downloadTable(setDatosTabla, signal, (exito, response) => {
            if(exito){
                toast.success("Se descargo con exito la tabla")
            } else {
                toast.error("Ha sucedido un error al descargar la tabla, " + response)
            }
        })

        return () => {
            // controller.abort()
        }
    }, [])

    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-24 bg-zinc-100">
            <div className='w-full flex justify-center my-3'>
                <div className='w-128 bg-slate-300 px-12 py-5 rounded'>

                    {/* Formulario */}

                    <div className="py-2">
                        <h1 className="text-center text-xl font-bold text-slate-800" onClick={() => console.log(datosTabla)}>
                            Agregar Producto
                        </h1>
                    </div>

                    <div className="py-2">
                        <Input className='my-2' type='text' id='FormularioInventarioInputCodigo' placeholder="AL34" label='Codigo' value={codigo} onChange={(e) => setCodigo(e.currentTarget.value)} />
                        <Input className='my-2' type='text' id='FormularioInventarioInputDescripcion' placeholder="Asfalto Liquido 34L" label='Descripcion' value={descripcion} onChange={(e) => setDescripcion(e.currentTarget.value)} />
                        <Input className='my-2' type='text' id='FormularioInventarioInputCantidadInicial' placeholder="10" label='Cantidad Inicial' value={cantidadInicial} onChange={(e) => setCantidadInicial(e.currentTarget.value)} />
                    </div>

                    {/* Boton para agregar a la tabla */}
                    <div className='flex justify-center'>
                        <ButtonGroup buttonList={botonAgregarATabla} id="SeleccionadorDeTabla" />
                    </div>

                </div>
            </div>

            <div className="w-128 bg-slate-300 p-5 rounded my-3">
                {
                    !datosTabla ?
                        <Table loading={true} header={headerTablaInventario} buttonGroup={[]} data={[]} id="tablaDescargas" /> :
                        <Table header={headerTablaInventario} buttonGroup={[{
                            label: "",
                            function: () => {
                                setEstadoModalEdicion((last) => !last)
                            },
                            icon: <FontAwesomeIcon icon={faPenToSquare} />,
                            color: "warning"
                        }, {
                            label: "",
                            function: (e: any, id: string | number) => {
                                eliminarDeTabla(e, id, (new AbortController).signal, (exito: boolean, response: any) => {
                                    if(exito){
                                        toast.success("La tabla se ha eliminado con exito")
                                        actualizarTabla()
                                    } else {
                                        toast.error("Hubo un error al eliminar la tabla, " + response)
                                    }
                                })
                            },
                            icon: <FontAwesomeIcon icon={faTrash} />,
                            color: "danger"
                        }]} data={datosTabla} id="tablaDescargas" />
                }
            </div>

            

            <Modal headerText="Edicion" activado={estadoModalEdicion} setActivado={setEstadoModalEdicion}/>
        </main>
    )
}