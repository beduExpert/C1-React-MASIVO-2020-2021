[`React Fundamentals`](../../README.md) > [`Sesión 05: Hooks y useEffect`](../Readme.md) > `Ejemplo 1`

## Consumo de API

### OBJETIVO
- Usar useEffect para consumir un API

#### REQUISITOS
- Haber completado el [Reto-02](../../Sesion-04/Reto-02) de la Sesion-04.

#### DESARROLLO

1. Abrir el proyecto del [Reto-02](../../Sesion-04/Reto-02) de la Sesion-04.

2. Vamos a abrir `App.js` y notemos que ya usa useEffect.

3. Si vemos el código comentado, notamos cómo se ven los métodos del ciclo de vida, sobrepasados por los hooks en los componentes funcionales.
```
import React from 'react';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';
import '../css/App.css';

function App() {
  // state = { todos: [] }
  const [todos, setTodos] = React.useState([]);
  const [show, setShow] = React.useState(true);

  // componentDidMount() {
    // this.setState({
      // todos: [
        // { title: "Sesión 1 (JSX)", done: true},
        // { title: "Sesión 2 (Estado y propiedades)", done: true },
        // { title: "Sesión 3 (Ciclo de vida)", done: true },
        // { title: "Sesión 4 (Hooks)", done: false },
        // { title: "Sesión 5 (Hooks)", done: false },
        // { title: "Sesión 6 (Rutas)", done: false },
        // { title: "Sesión 7 (PWA)", done: false },
        // { title: "Sesión 8 (Material UI)", done: false },
      // ],
    // })
  // }
  React.useEffect(() => {
    setTodos([
      { title: "Sesión 1 (JSX)", done: true},
      { title: "Sesión 2 (Estado y propiedades)", done: true },
      { title: "Sesión 3 (Ciclo de vida)", done: true },
      { title: "Sesión 4 (Hooks)", done: false },
      { title: "Sesión 5 (Hooks)", done: false },
      { title: "Sesión 6 (Rutas)", done: false },
      { title: "Sesión 7 (PWA)", done: false },
      { title: "Sesión 8 (Material UI)", done: false },
    ]);
  }, []);

  const handleClickDelete = (e, title) => {
    const t = [...todos];
    const index = t.findIndex(e => e.title === title);
    if (-1 < index) t.splice(index, 1);

    setTodos(t);
  }

  const handleClickToggleDone = (e, title) => {
    const t = [...todos];
    const index = t.findIndex(e => e.title === title)
    if (-1 < index) t[index].done = !t[index].done;

    setTodos(t);
  }

  const addTask = (title) => {
    // const exists = this.state.todos.find(e => title === e.title);
    const exists = todos.find(e => title === e.title);

    if (exists) {
      alert(`La tarea "${title}" ya existe!`);
      return
    }

    // this.setState({
      // todos : this.state.todos.concat([{ title, done: false }])
    // });
    setTodos(todos.concat([{ title, done: false }]));
  }

  const filtered = todos.filter(e => !e.done || e.done === show);

  return (
    <div className="wrapper">
      <div className="card frame">
        <Header
          counter={filtered.length}
          show={show}
          toggleDone={setShow}
        />
        <TodoList 
          tasks={filtered}
          toggleFn={handleClickToggleDone}
          deleteFn={handleClickDelete}
        />
        <Form addTaskFn={addTask} />
      </div>
    </div>
  )
}

export default App;
``` 

3. Notemos como el método `componentDidMount` con dentro un `this.setState` es sobrepasado por `useEffect` y por `useState`.
```
  // ... código omitido ...
  // state = { todos: [] }
  const [todos, setTodos] = React.useState([]);
  // ... código omitido ...
  // componentDidMount() {
    // this.setState({
      // todos: [
        // { title: "Sesión 1 (JSX)", done: true},
        // { title: "Sesión 2 (Estado y propiedades)", done: true },
        // { title: "Sesión 3 (Ciclo de vida)", done: true },
        // { title: "Sesión 4 (Hooks)", done: false },
        // { title: "Sesión 5 (Hooks)", done: false },
        // { title: "Sesión 6 (Rutas)", done: false },
        // { title: "Sesión 7 (PWA)", done: false },
        // { title: "Sesión 8 (Material UI)", done: false },
      // ],
    // })
  // }
  React.useEffect(() => {
    setTodos([
      { title: "Sesión 1 (JSX)", done: true},
      { title: "Sesión 2 (Estado y propiedades)", done: true },
      { title: "Sesión 3 (Ciclo de vida)", done: true },
      { title: "Sesión 4 (Hooks)", done: false },
      { title: "Sesión 5 (Hooks)", done: false },
      { title: "Sesión 6 (Rutas)", done: false },
      { title: "Sesión 7 (PWA)", done: false },
      { title: "Sesión 8 (Material UI)", done: false },
    ]);
  }, []);
  // ... código omitido ...
```

4. Un ejemplo más real sería traer dicha información de internet, y por ello añadimos un proyecto de backend que nos permite consumir informración. En la carpeta `fake-backend` se encuentra dicho proyecto. Veamos qué tiene el archivo `data.json`
```
{
  "todos": [
    { "id": 1, "title": "Sesión 1 (JSX)", "done": true},
    { "id": 2, "title": "Sesión 2 (Estado y propiedades)", "done": true },
    { "id": 3, "title": "Sesión 3 (Ciclo de vida)", "done": true },
    { "id": 4, "title": "Sesión 4 (Hooks)", "done": false },
    { "id": 5, "title": "Sesión 5 (Hooks)", "done": false },
    { "id": 6, "title": "Sesión 6 (Rutas)", "done": false },
    { "id": 7, "title": "Sesión 7 (PWA)", "done": false },
    { "id": 8, "title": "Sesión 8 (Material UI)", "done": false }
  ]
}

```

5. Ahora solo es cuestión de levantar el servidor con `npm start` en la carpeta `fake-backend`

6. Si entramos a `http://localhost:4000` y en particular a `http://localhost:4000/todos` veremos esa misma información pero ya consumida desde un servidor (`localhost:4000`). Así solo hay que consumirla en nuestro `App.js`

7. El componente `App.js` debe de quedar de la siguiente manera
```
// ... código omitido ...

const URL = "http://localhost:4000/todos";

// ... código omitido ...

React.useEffect(() => {
  const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setTodos(data);
  };

  getData();
}, []);

// ... código omitido ...
```

-------

[`Siguiente: Reto-01`](../Reto-01)
