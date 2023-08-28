import React, { useEffect, useState} from 'react'
import ModalDetail from './ModalDetail'

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


    const listaUsuarios = datosAPI.map( (valorActual)=> {
        return (

        <ul key={valorActual.id}>
            <li>{valorActual.name}</li>
            <li><ModalDetail id={valorActual.id}></ModalDetail></li>
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