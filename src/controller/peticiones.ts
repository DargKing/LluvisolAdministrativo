import { Dispatch, SetStateAction } from "react"
import { toast } from "react-toastify"

export const eliminarDeTabla = async (e: any, id: string | number, signal: AbortSignal, callback: (exito: boolean, message?: any) => void) => {
    console.log(id)
    if(typeof id != "string" && typeof id != "number" || isNaN(id as number)) {
        return
    }
    
    if(typeof id == "string") {
        id = parseInt(id)
    }

    const request = await fetch("/api/inventario/items", {
        method: "DELETE",
        body: JSON.stringify({ id })
    })

    const response = await request.json()

    if(request.status == 200){
        toast.success("Se elimino con exito el producto (" + 12 + ")")
    } else {
        console.log(response)
    }
}

export const downloadTable = async (useState: Dispatch<SetStateAction<any>>, signal: AbortSignal,  callback?: (exito: boolean, message?: string) => void) => {
    const request = await fetch("/api/inventario/items", {
        method: "GET",
        headers: {
            accept: "application/json",
        },
        signal
    })
    
    const status = request.status

    const response = await request.json()

    if(status == 200){
        useState(response)

        if(callback){
            callback(true)
        }
    } else {
        if(callback){
            callback(false, response)
        }
    }
}