import React, {useState, useEffect} from 'react'
import axios from 'axios';

const TodoList = () => {


    const [objList, setObjList] = useState([ {id: 1, text: 'doing something', completed: true }])

    console.log(objList)
 //--------------------OPCION SEPARANDO USEeFFECT DE LLAMADA 
    // useEffect(() => {
    //   llamadaApi()
    // }, [])
    
    // const llamadaApi = async ()=>{
    //     const llamada =  await axios.get('https://jsonplaceholder.typicode.com/users')
    //     console.log("ejemplo",llamada);
    //     setObjList(llamada.data);   
    // }
    
// -----------------------OPCION 2 EN 1
    useEffect(() => {
        const apiUrl = 'https://jsonplaceholder.typicode.com/todos'; 
        const llamada = axios.get(apiUrl)
          .then(response => setObjList(response.data)) // especificar el set de nuestro useState
          .catch(error => console.log('Error al obtener los datos:', error));
        console.log(llamada);
      }, []);
    


  return (
    <>
    <div>TodoList</div>
    
    </>
  )
}

export default TodoList