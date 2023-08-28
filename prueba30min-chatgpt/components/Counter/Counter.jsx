import React, { useState } from 'react'
import StyleCSS from './counter.module.css'

const Counter = ({valorContador, setValorContador}) => {

   

  return (
    <>
    <p className={StyleCSS.p}>{valorContador}</p> 

    <button onClick={()=>{setValorContador(valorContador+1)}}>  Incrementar + </button>
    <button onClick={()=>{valorContador===0? setValorContador(0) : setValorContador(valorContador-1)}}> Decrementar - </button>
    </>
  )
}

export default Counter