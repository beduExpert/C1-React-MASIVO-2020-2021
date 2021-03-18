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
