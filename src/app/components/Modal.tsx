import React, { Dispatch, LegacyRef, SetStateAction, useEffect, useRef } from 'react'

export default function Modal({
    children, headerText, activado, setActivado
}: {
    children?: React.ReactNode,
    headerText: string,
    activado: boolean,
    setActivado: Dispatch<SetStateAction<boolean>>
}) {

    const fondoModal = useRef<HTMLDivElement>(null)

    const aparecerModal = () => {
        if (fondoModal.current) {
            let temp = (fondoModal.current as unknown as HTMLDivElement)
            temp.classList.replace("hidden", "block")
        }
    }

    const desaparecerModal = () => {
        if (fondoModal.current) {
            let temp = (fondoModal.current as unknown as HTMLDivElement)
            temp.classList.remove("bg-[--bg-fondo-modal]")
            temp.classList.add("animate-[aparecerFondoModal_0.2s_ease-in_reverse_1]")

            setTimeout(() => {
                temp.classList.remove("animate-[aparecerFondoModal_0.2s_ease-in_reverse_1]")
                temp.classList.replace("block", "hidden")
                temp.classList.add("animate-[aparecerFondoModal_0.2s_ease-out_forwards_1]")
            }, 200)
        }
    }

    useEffect(() => {
        if (activado) {
            aparecerModal()
        } else {
            desaparecerModal()
        }
    }, [activado])

    return (
        <div
            className="animate-[aparecerFondoModal_0.2s_ease-out_forwards_1] [--bg-fondo-modal:#00000076] fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
            id="exampleModalComponents"
            tabIndex={-1} ref={fondoModal} onAnimationEnd={(e) => {
                if(activado){
                    e.currentTarget.classList.add("bg-[--bg-fondo-modal]")
                    e.currentTarget.classList.remove("animate-[aparecerFondoModal_0.2s_ease-out_forwards_1]")
                }
            }}>
            <div
                className="pointer-events-none relative w-auto opacity-100 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:my-7 min-[576px]:max-w-[500px]">
                <div
                    className="animate-[aparecerCardDelModal_0.2s_ease-out_forwards_1] top-[calc(-100% - 1.75rem)]; min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                    <div
                        className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                        <h5
                            className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                            id="exampleModalComponentsLabel">
                            {headerText}
                        </h5>
                        <button
                            type="button"
                            className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                            aria-label="Close" onClick={() => setActivado(false)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="relative flex-auto p-4">
                        Modal body text goes here.
                    </div>
                    <div
                        className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                        <button
                            type="button"
                            className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                            data-te-modal-dismiss
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Close
                        </button>
                        <button
                            type="button"
                            className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
