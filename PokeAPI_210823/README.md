1. Creo carpeta components 
2. Creo componente Input.jsx y lo llamo en index.js
3. Creo input y botón sin funcionalidad
4. Creo const llamadaAPI y llamo para ver en consola (paso por parametro el nombre)
```javascript
import React from 'react'

const Input = () => {


    const llamadaAPI = async (nombre) => {
        const llamada = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        const datos = await llamada.json()
        console.log(datos)
    }

llamadaAPI("ditto")

  return (
    <>
    <input></input>
    <button>Clic</button>
    </>
  )
}

export default Input
```
5. Creo useState para guardar los datos de la API y muestro en return
```javascript
const Input = () => {

    const [datosAPI, setDatosAPI] = useState("no hay datos en la API")

    const llamadaAPI = async (nombre) => {
        const llamada = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        const datos = await llamada.json()
       setDatosAPI(datos)
    }


  return (
    <>
    {datosAPI}
    <input></input>
    <button>Clic</button>
    </>
  )
}
```
6. Creo useState para guardar datos que almacena el usuario
```javascript
    //---------------useState datos que introduce el usuario------
    const [textoUsuario, setTextoUsuario] = useState("no se ha escrito nada")
```
7. Funcion del input y del botón.
El input recibe datos y almacena en la variable del useState lo que recibe.
El botón tiene funcion de llamada a API y tb tiene que pasar el parámetro que necesita.
```javascript 
  return (
    <>
    {datosAPI}
    <input onChange={(e)=>{setTextoUsuario(e.target.value)}}></input>
    <button onClick={()=>{llamadaAPI(nombrePokemon)}}>Clic</button>
    </>
  )
```
8. 