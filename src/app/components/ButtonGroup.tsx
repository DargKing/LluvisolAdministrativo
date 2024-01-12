import React from 'react'
import { ButtonGroupOptions } from '../interfaces/UI-types'
import { equal } from 'assert'

function ButtonLeft({ btn, equalPadding, id }: { btn: ButtonGroupOptions, equalPadding?: boolean, id: string | number }) {
    if (equalPadding) {
        return (
            <button onClick={(e) => btn.function(e, id)}
                className={`inline-block rounded-l bg-${btn.color} p-2.5 leading-none text-xs font-medium uppercase text-white transition duration-150 ease-in-out hover:bg-${btn.color}-600 focus:bg-${btn.color} focus:outline-none focus:ring-0 active:bg-${btn.color}-700`}
                data-te-ripple-init
                data-te-ripple-color="light">
                {btn.label}
                {btn && btn.icon}
            </button>
        )
    } else {
        return (
            <button onClick={(e) => btn.function(e, id)}
                className={`inline-block rounded-l bg-${btn.color} px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-${btn.color}-600 focus:bg-${btn.color}-600 focus:outline-none focus:ring-0 active:bg-${btn.color}-700`}
                data-te-ripple-init
                data-te-ripple-color="light">
                {btn.label}
                {btn && btn.icon}
            </button>
        )
    }
}

function ButtonRight({ btn, equalPadding, id }: { btn: ButtonGroupOptions, equalPadding?: boolean, id: string | number }) {
    if (equalPadding) {
        return (
            <button onClick={(e) => btn.function(e, id)}
                className={`inline-block rounded-r bg-${btn.color} p-2.5 leading-none text-xs font-medium uppercase text-white transition duration-150 ease-in-out hover:bg-${btn.color}-600 focus:bg-${btn.color}-600 focus:outline-none focus:ring-0 active:bg-${btn.color}-700`}
                data-te-ripple-init
                data-te-ripple-color="light">
                {btn.label}
                {btn && btn.icon}
            </button>
        )
    } else {
        return (
            <button onClick={(e) => btn.function(e, id)}
                className={`inline-block rounded-r bg-${btn.color} px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-${btn.color}-600 focus:bg-${btn.color}-600 focus:outline-none focus:ring-0 active:bg-${btn.color}-700`}
                data-te-ripple-init
                data-te-ripple-color="light">
                {btn.label}
                {btn && btn.icon}
            </button>
        )
    }
}

function ButtonCenter({ btn, equalPadding, id }: { btn: ButtonGroupOptions, equalPadding?: boolean, id: string | number }) {
    if (equalPadding) {
        return (
            <button onClick={(e) => btn.function(e, id)}
                className={`inline-block bg-${btn.color} p-2.5 leading-none text-xs font-medium uppercase text-white transition duration-150 ease-in-out hover:bg-${btn.color}-600 focus:bg-${btn.color}-600 focus:outline-none focus:ring-0 active:bg-${btn.color}-700`}
                data-te-ripple-init
                data-te-ripple-color="light">
                {btn.label}
                {btn && btn.icon}
            </button>
        )
    } else {
        return (
            <button onClick={(e) => btn.function(e, id)}
                className={`inline-block bg-${btn.color}-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-${btn.color}-600 focus:bg-${btn.color}-600 focus:outline-none focus:ring-0 active:bg-${btn.color}-700`}
                data-te-ripple-init
                data-te-ripple-color="light">
                {btn.label}
                {btn && btn.icon}
            </button>
        )
    }
}

export default function ButtonGroup({ buttonList, className, id, equalPadding }: { buttonList: ButtonGroupOptions[], className?: string, id: string | number, equalPadding?: boolean }) {

    if (buttonList.length > 1) {
        return (
            <div
                className={(className ?? "") + " " + "inline-flex rounded-md shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"}
                role="group">
                {buttonList.map((btn, index, arr) => {
                    if (index == 0) {
                        return (
                            <ButtonLeft key={"Button" + id + index} id={id} equalPadding={equalPadding} btn={btn} />
                        )
                    } else if (arr.length - 1 == index) {
                        return (
                            <ButtonRight key={"Button" + id + index} id={id} equalPadding={equalPadding} btn={btn} />
                        )
                    } else {
                        return (
                            <ButtonCenter key={"Button" + id + index} id={id} equalPadding={equalPadding} btn={btn} />
                        )
                    }
                })}
            </div>
        )
    } else {
        return (<div
            className={(className ?? "") + " " + "inline-flex rounded-md shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"}
            role="group">
            {buttonList.map((btn) => {
                return (
                    <ButtonCenter key={"Button" + id + btn.label} id={id} equalPadding={equalPadding} btn={btn} />
                )
            })}
        </div>)
    }
}
