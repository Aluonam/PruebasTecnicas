Tarea 1: Componente de Lista

Crea un nuevo proyecto React utilizando la herramienta de línea de comandos de React.
Crea un componente funcional llamado ItemList.
Dentro del componente, renderiza una lista de elementos utilizando el método map().
Los elementos de la lista deben ser cadenas de texto y se deben representar dentro de elementos <li>.
toString? .spit('') ???

Tarea 2: Contador con Botones

Crea un nuevo componente funcional llamado Counter.
Agrega un estado que almacene el valor actual del contador.
Renderiza el valor del contador en un elemento <p>.
Agrega dos botones: "Incrementar" y "Decrementar".
Al hacer clic en el botón "Incrementar", el contador debe aumentar en 1.
Al hacer clic en el botón "Decrementar", el contador debe disminuir en 1.
Asegúrate de que el contador no pueda ser menor que 0.


Tarea 3: Estilos con CSS en línea

En el componente Counter, agrega estilos en línea para que el párrafo que muestra el contador tenga un fondo de color azul claro y un margen superior de 10px.

Tarea 4: Comunicación entre Componentes

Crea un nuevo componente funcional llamado ParentComponent.
Dentro de ParentComponent, renderiza un Counter y un ItemList.
Pasa el valor actual del contador como prop al componente ItemList.

Tarea 5 (Bono): Cambio de Color con Estado

En el componente ParentComponent, agrega un botón "Cambiar Color".
Al hacer clic en el botón, cambia el color de fondo del componente ItemList a un color aleatorio.
