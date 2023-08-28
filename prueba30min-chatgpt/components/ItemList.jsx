import React from 'react'

const ItemList = ({valorContador, colorFondo}) => {

    const arrListaElementos = ["elemento1 ", "elemento2 ", "elemento3 ", "elemento4 ", "elemento5 ", "elemento6 "]

    const recorrerArray = arrListaElementos.map((elementoActual, index)=>{
        return(
            <li key={index} >{elementoActual}</li>
        )
    })



  return (
    <div style={{backgroundColor:colorFondo}}>ItemList:
        <br></br>
        {recorrerArray}
        <br></br>
        {valorContador}
    </div>

  )
}

export default ItemList