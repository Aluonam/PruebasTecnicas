import React, {useState, useEffect} from 'react'
import axios from 'axios';

const TodoList = () => {


    const [objList, setObjList] = useState([ {id: 1, text: 'doing something', completed: true }])
    const [inputValue, setInputValue] = useState()

    useEffect(() => {
      llamadaApi()
    }, [])
    
    //--------------------- GET API
    const llamadaApi = async ()=>{
        const llamada =  await axios.get('https://jsonplaceholder.typicode.com/todos')
        console.log("ejemplo",llamada);
        setObjList(llamada.data);   
    }
    //-------------------- POST API
    const createTask = () => {
        const baseURL= `https://jsonplaceholder.typicode.com/todos`
        const bodyPOST = {
            title: inputValue
          }

        axios
          .post(baseURL,bodyPOST )
          .then((response) => {
            console.log("respuesta",response.data);
          });
          //saldrá en consola 201 que significa que se ha enviado con exito, aunque esta BD no permite que yo la cambie y por tanto no aparece una nueva tarea en el DOM
      }
      const listaDatos = objList.map((valorActual)=>{
        return (
            <ul key={valorActual.id}>
            <li style={valorActual.completed ? {textDecoration: "line-through", color: "gray"}: {backgroundColor: "lightyellow"}}>{valorActual.title}</li>
            </ul>
        )
      })

      const handleClickTareasCompletas = ()=>{
        const tareasSinCompletar = objList.filter((elementoActual)=>elementoActual.completed!==true)
        setObjList(tareasSinCompletar)
      }
      

   


  return (
    <>
    <h3>ToDoList</h3>
    <button onClick={()=>handleClickTareasCompletas()}>Eliminar Tareas Completadas</button>
    {listaDatos}
    <br></br>
    <div>
    <input onChange={(e)=>{setInputValue(e.target.value)}}></input>
    <button onClick={()=>{createTask()}}>Añadir nueva tarea</button>
    </div>
    </>
  )
}

export default TodoList