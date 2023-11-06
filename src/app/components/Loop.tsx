import React from 'react'

export default function Loop({to, children}: {from: number, to: number, children: React.ReactNode}) {
  const elementos: React.ReactNode[] = []

  for(let i = 1; to >= i; i++){
    elementos.push(children)
  }

  return elementos
}
