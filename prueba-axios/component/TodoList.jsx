import React, {useState, useEffect} from 'react'
import axios from 'axios';

const TodoList = () => {


    const [objList, setObjList] = useState([ {id: 1, text: 'doing something', completed: true }])

    useEffect(() => {
      llamadaApi()
    }, [])
    
    const llamadaApi = async ()=>{
        const llamada =  await axios.get('https://jsonplaceholder.typicode.com/todos')
        console.log("ejemplo",llamada);
        setObjList(llamada.data);   
    }
    
      const listaDatos = objList.map((valorActual)=>{
        return (
            <ul key={valorActual.id}>
            <li style={valorActual.completed ? {textDecoration: "line-through"}: {}}>{valorActual.title}</li>
            </ul>
        )
      })


  return (
    <>
    <div>TodoList</div>
    {listaDatos}
    </>
  )
}

export default TodoList