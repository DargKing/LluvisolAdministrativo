"use client"
import { SelectHTMLAttributes, useEffect, useState } from "react"
import { SelectOptions } from "../interfaces/UI-types"

export default function Select({ options, className, id, label }: { options: SelectOptions[], className?: string, id: string, label?: string }) {
    const [value, setValue] = useState(options[0].value)


    return (
        <div className={'w-full relative bg-inherit ' + (className ?? "")}>
            <select id={id} value={value} onChange={(e) => setValue(e.currentTarget.value)} className={'peer outline-offset-0 hover:outline-[#3b71ca] outline-none appearance-none border-gray-600 border duration-200 transition-all easy-linear px-2 py-1.5 w-full bg-transparent rounded-md cursor-pointer active:outline-[#3b71ca90] box-border'}>
                {options.map(function (op) {
                    return (<option key={"Mes-" + op.label} value={op.value}>{op.label}</option>)
                })}
            </select>
            {label && <label htmlFor={id} className="absolute -top-2 left-2 text-sm bg-inherit px-1 text-[#00000090]">{label}</label>}
            <span className='peer-focus:stroke-[#3b71ca] stroke-black text-[0.8rm] absolute w-5 h-5 right-3 top-2 pointer-events-none'>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-inherit duration-200 transition-all" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                </svg>
            </span>
        </div>
    )
}