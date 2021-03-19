import React from 'react';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';
import '../css/App.css';

const URL = "http://localhost:4000/todos";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setTodos(data);
      } catch(error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  const handleClickDelete = (e, title) => {
    const t = [...todos];
    const index = t.findIndex(e => e.title === title);
    if (-1 < index) t.splice(index, 1);

    setTodos(t);
  }

  const changeProperty = (config, property, value) => {
    return fetch(config.url, {
      method: config.method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ [property]: value })
    })
  }

  const handleClickToggleDone = async (e, title) => {
    // Otener el índice del elemento que se le hizo click
    const el = todos.find(e => e.title === title)
    // Verificar que en efecto exista en el `todos`
    if (el === undefined) return

    const value = !el.done;

    // Cambio en el servidor
    const config = {
      url: `${URL}/${el.id}`,
      method: "PATCH"
    };

    try {
      const response = await changeProperty(config, "done", value)

      if (!response.ok) throw new Error("Response not ok");

      // UI
      const t = [...todos];
      const index = t.findIndex(element => element.id === el.id);
      t[index].done = !t[index].done;

      setTodos(t);
    } catch (error) {
      console.error(error);
    }
  }

  const addTask = (title) => {
    const exists = todos.find(e => title === e.title);

    if (exists) {
      alert(`La tarea "${title}" ya existe!`);
      return
    }

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
