import React, { useEffect, useState} from 'react'
import ModalDetail from './ModalDetail'
import ModalDetailv2 from './ModalDetailv2'


const UserList = ({valorContador}) => {

    const [datosAPI, setDatosAPI] = useState([])

    useEffect(() => {
      llamadaAPI()
    }, [])
    

    const llamadaAPI = async () => {
        const llamada = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const datos = await llamada.json();
        setDatosAPI(datos);
    }


    const listaUsuarios = datosAPI.map( (valorActual)=> {
        return (

        <ul key={valorActual.id}>
            <li>{valorActual.name}</li>
            <li><ModalDetail id={valorActual.id}></ModalDetail>--<ModalDetailv2 datosAPI={valorActual}></ModalDetailv2></li>
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