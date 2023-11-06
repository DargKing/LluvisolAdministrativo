import React, { useState, useEffect, ChangeEvent, useRef } from 'react'

export default function Input({ className, onChange, value, type, id, label, placeholder }: { className: string, placeholder?: string, label?: string, value?: string, type?: string, id?: string, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    let ref = useRef<HTMLDivElement>(null)
    
    const enfocado = () => {
        if(ref.current){
            ref.current.classList.add("outline-cyan-500")
            ref.current.classList.add("outline-2")
            ref.current.classList.add("easy-out")
        }
    }

    const desenfocado = () => {
        if(ref.current){
            ref.current.classList.remove("outline-cyan-500")
            ref.current.classList.remove("outline-2")
            ref.current.classList.remove("easy-out")
        }
    }
    
    if (!onChange) {
        throw new Error('The Method "onChange" not finded in the Element Propieties')
    }

    if (!type) {
        throw new Error('The propietie "type" not finded in the Element Propieties')
    }

    if (!id) {
        throw new Error('The propietie "id" not finded in the Element Propieties')
    }

    if (type == "text") {
        return (
            <div ref={ref} className={'outline outline-offset-0 outline-cyan-300 py-2 px-3 bg-white relative h-14 overflow-hidden duration-100 easy-in rounded-md text-black outline-cyan-300 outline-1 outline-offset-0 box-border ' + (!label ? "h-10 ": "" ) + (className ?? "")}>
                {label && <label htmlFor={id} className="block text-xs font-medium bg-inherit text-black w-full">{label}</label>}
                <input onFocus={enfocado} onBlur={desenfocado} className='text-sm w-full appearance-none bg-transparent outline-none' placeholder={(placeholder) ? placeholder: (label) ? label: ""} id={id} type="text" value={value} onChange={(e) => onChange(e)} />
            </div>
        )
    } else {
        return (<input></input>)
    }
}