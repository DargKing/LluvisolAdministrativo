"use client"
import Image from 'next/image'
import { useEffect } from 'react'
import { ButtonGroupOptions, HeaderTable, RowTable, SelectOptions } from './interfaces/UI-types'
import Select from "@/app/components/Select"
import ButtonGroup from './components/ButtonGroup'
import Table from './components/Table'

const options: SelectOptions[] = [{
  label: "Enero",
  value: "EN"
}, {
  label: "Febrero",
  value: "FE"
}, {
  label: "Marzo",
  value: "MR"
}, {
  label: "Abril",
  value: "AB"
}, {
  label: "Mayo",
  value: "MY"
}, {
  label: "Junio",
  value: "JN"
}, {
  label: "Julio",
  value: "JL"
}, {
  label: "Agosto",
  value: "AG"
}, {
  label: "Septiembre",
  value: "SP"
}, {
  label: "Octubre",
  value: "OC"
}, {
  label: "Noviembre",
  value: "NO"
}, {
  label: "Diciembre",
  value: "DI"
}]

export default function Home() {

  const listaDeBotones: ButtonGroupOptions[] = [{
    label: "Entradas",
    function: function (e) { }
  }, {
    label: "Descargas",
    function: function (e) { }
  }]
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 bg-zinc-100">

      <div className='w-full flex justify-center my-3'>
        <div className='w-128 bg-slate-300 p-5 rounded'>

          {/* Selector de Mes */}
          <Select options={options} className='my-2' id="SelectorDeMes" label='Mes' />

          {/* Botones para seleccionar la tabla */}
          <div className='flex justify-center'>
            <ButtonGroup buttonList={listaDeBotones} id="SeleccionadorDeTabla" />
          </div>

        </div>
      </div>

      <div className="w-128 bg-slate-300 p-5 rounded my-3">
        {/* <Table loading={true} header={headerTablaDescargas} data={tablaDescargas} id="tablaDescargas" /> */}
      </div>

    </main>
  )
}
