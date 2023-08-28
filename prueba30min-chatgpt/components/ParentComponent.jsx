import React, {useState} from 'react'
import Counter from './Counter/Counter'
import ItemList from './ItemList'

const ParentComponent = () => {

    const [valorContador, setValorContador] = useState(0)
    const [colorFondo, setColorFondo] = useState("#00FF0000")

    const handleOnClick = () => {
        const simbolos = "0123456789ABCDEF";
        let color = "#";
        for(var i = 0; i < 6; i++){
            color = color + simbolos[Math.floor(Math.random() * 16)];
        }
        setColorFondo(color)
    }


  return (
    <>
    <Counter valorContador={valorContador} setValorContador={setValorContador}></Counter>
    <br></br>
    <ItemList valorContador={valorContador} colorFondo={colorFondo}></ItemList>
    <br></br>
    <button onClick={()=>handleOnClick()}>Cambiar Color de Item List</button>
    </>
  )
}

export default ParentComponent