import React, { useEffect, useState} from 'react'

const UserList = ({valorContador}) => {

    const [datosAPI, setDatosAPI] = useState([])

    useEffect(() => {
      llamadaAPI()
    }, [])
    

    const llamadaAPI = async () => {
        const llamada = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const datos = await llamada.json();
        // console.log(datos[1].name)
        setDatosAPI(datos);
    }

    const llamadaDetalles = async () =>{
      const llamadaDetalles = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      const datosDetalle = await llamadaDetalles.json();
      console.log(datosDetalle)
    } 

    const listaUsuarios = datosAPI.map( (valorActual)=> {
        return (

        <ul key={valorActual.id}>
            <li>{valorActual.name}</li>
            <li><button>Detalles</button></li>
        </ul>

        )
    })

  return (

    <div>
    {listaUsuarios}
    {valorContador}
    
    </div>

  )
}

export default UserList