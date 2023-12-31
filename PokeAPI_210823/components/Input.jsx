import React, {useState} from 'react'

const Input = () => {

    //---------------useState datos de la API---------------------
    const [datosAPI, setDatosAPI] = useState("")
    //---------------useState datos que introduce el usuario------
    const [textoUsuario, setTextoUsuario] = useState('')

    const llamadaAPI = async (textoUsuario) => {
        try{
        const url = `https://pokeapi.co/api/v2/pokemon/${textoUsuario}`;
        const llamada = await fetch(url);
        const datos = await llamada.json();
       setDatosAPI(datos.sprites.front_default) 
    } catch(error){
        console.log("Error detectado",error)
    }
    }


  return (
    <>
    {datosAPI!=='' && <img src={datosAPI} alt='imagen pokemon'></img>}
    <input onChange={(e)=>{setTextoUsuario(e.target.value)}}></input>
    <button onClick={()=>{llamadaAPI(textoUsuario)}}>Clic</button>
    </>
  )
}

export default Input