
Tarea 1: Configuración inicial

Crea un nuevo proyecto React utilizando la herramienta de línea de comandos de React.
Instala el paquete axios para manejar las solicitudes HTTP.

<code>npm install axios</code>

Tarea 2: Componente de Lista de Tareas

Crea un componente funcional llamado TodoList.
Agrega un estado que almacene una lista de objetos de tareas en la forma { id, text, completed }.
Utiliza el efecto useEffect para realizar una solicitud GET a la URL https://jsonplaceholder.typicode.com/todos y almacenar la lista de tareas en el estado.

```javascript
    useEffect(() => {
        const apiUrl = 'https://jsonplaceholder.typicode.com/todos'; 
        axios.get(apiUrl)
          .then(response => setData(response.data))
          .catch(error => console.log('Error al obtener los datos:', error));
      }, []);
```

Renderiza la lista de tareas en una lista utilizando elementos <ul> y <li>.
```javascript
const listaDatos = objList.map((valorActual)=>{
        return (
            <ul key={valorActual.id}>
            <li>{valorActual.title}</li>
            </ul>
        )
      })
```
Muestra el texto de cada tarea y utiliza un estilo de texto tachado si la tarea está completada (completed es true).
<code>textDecoration: "line-through"</code>
```javascript
const listaDatos = objList.map((valorActual)=>{
        return (
            <ul key={valorActual.id}>
            <li style={valorActual.completed ? {textDecoration: "line-through"}: {}}>{valorActual.title}</li>
            </ul>
        )
      })
```

Tarea 3: Manejo de Arrays

Encima de la lista de tareas, agrega un botón "Eliminar Tareas Completadas".
Al hacer clic en el botón, filtra las tareas completadas y actualiza el estado para mostrar solo las tareas restantes.
Tarea 4: Creación y Actualización de Tareas

Agrega un formulario debajo de la lista de tareas con un campo de entrada de texto.
Al enviar el formulario, utiliza el efecto useEffect para realizar una solicitud POST a la URL https://jsonplaceholder.typicode.com/todos con el texto de la nueva tarea.
Actualiza el estado para incluir la nueva tarea en la lista.

Tarea 5: Estilos con CSS

Agrega estilos para mejorar la apariencia de la lista de tareas.
Estiliza los elementos de la lista (<li>) para que tengan un fondo claro y un borde.
Cambia el color del texto de las tareas completadas para que sea más tenue.