import React, { useId, useEffect } from 'react'
import { ButtonGroupOptions, HeaderTable, RowTable } from '../interfaces/UI-types'
import Loop from './Loop'
import ButtonGroup from './ButtonGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Table({ loading, data, header, id, buttonGroup }: { loading?: boolean, data: any[], header: HeaderTable, id: string | number, buttonGroup: ButtonGroupOptions[] }) {
  const idTablaCarga = useId()
  const animationDurationInMs = 600

  useEffect(() => {
    const inter = setInterval(() => {
      const rowsLoading = document.getElementById("tablaDeCarga" + idTablaCarga)?.children

      if (rowsLoading?.length == 0) {
        clearInterval(inter)
      }

      rowsLoading?.item(0)?.classList.add("animate-pulse")

      setTimeout(() => {
        rowsLoading?.item(1)?.classList.add("animate-pulse")
      }, animationDurationInMs * 0.3)

      setTimeout(() => {
        rowsLoading?.item(0)?.classList.remove("animate-pulse")
      }, animationDurationInMs * 1)

      setTimeout(() => {
        rowsLoading?.item(2)?.classList.add("animate-pulse")
      }, animationDurationInMs * .6)

      setTimeout(() => {
        rowsLoading?.item(1)?.classList.remove("animate-pulse")
      }, animationDurationInMs * 1.3)

      setTimeout(() => {
        rowsLoading?.item(3)?.classList.add("animate-pulse")
      }, animationDurationInMs * 0.9)

      setTimeout(() => {
        rowsLoading?.item(2)?.classList.remove("animate-pulse")
      }, animationDurationInMs * 1.6)

      setTimeout(() => {
        rowsLoading?.item(4)?.classList.add("animate-pulse")
      }, animationDurationInMs * 1.2)

      setTimeout(() => {
        rowsLoading?.item(3)?.classList.remove("animate-pulse")
      }, animationDurationInMs * 1.9)

      setTimeout(() => {
        rowsLoading?.item(4)?.classList.remove("animate-pulse")
      }, animationDurationInMs * 2.2)


    }, animationDurationInMs * 2.3)

    return () => {
      clearInterval(inter)
    }
  }, [])

  if (loading) {
    return (<table className='table-fixed w-full border border-gray-700 rounded'>
      <tbody id={"tablaDeCarga" + idTablaCarga}>
        <Loop from={0} to={5}>
          <tr className={"[animation-duration:600ms] odd:bg-slate-500 even:bg-slate-400"}>
            <Loop from={0} to={4}>
              <th className='border border-gray-700 h-7'>
              </th>
            </Loop>
          </tr>
        </Loop>
      </tbody>
    </table>)
  } else if (data && data.length > 0) {
    return (
      <table className="table-auto w-full border border-gray-700 rounded">
        <thead>
          <tr className='bg-slate-500'>
            {header.columns.map((column, index) => {
              return <th key={"columnaHeaderTabla" + id + index} className='border border-gray-700'>{column}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            if (index % 2 == 0) {
              return (
                <tr key={"filaTabla" + id + index} className='bg-slate-400'>
                  {header.keyName.map((key, index) => {
                    return (
                      <th key={"columnaTabla" + id + index} className='border border-gray-700'>{row[key]}</th>
                    )
                  })}
                  {
                    buttonGroup.length > 0 &&
                    <th className='border border-gray-700'>
                      <ButtonGroup id={row.id ?? index} buttonList={buttonGroup} equalPadding={true} />
                    </th>
                  }
                </tr>)
            } else {
              return (
                <tr key={"filaTabla" + id + index} className='bg-slate-500'>
                  {header.keyName.map((key, index) => {
                    return (
                      <th key={"columnaTabla" + id + index} className='border border-gray-700'>{row[key]}</th>
                    )
                  })}

                  {
                    buttonGroup.length > 0 &&
                    <th className='border border-gray-700'>
                      <ButtonGroup id={row.id ?? index} buttonList={buttonGroup} equalPadding={true} />
                    </th>
                  }
                </tr>)
            }
          })}
        </tbody>
      </table>
    )
  } else {
    <table></table>
  }
}
