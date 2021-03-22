import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import TodoDetails from './TodoDetails';
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

  const handleClickDelete = async (e, title) => {
    // Otener el índice del elemento que se le hizo click
    const el = todos.find(e => e.title === title)
    // Verificar que en efecto exista en el `todos`
    if (el === undefined) return

    // Cambio en el servidor
    const config = {
      url: `${URL}/${el.id}`,
      method: "DELETE"
    };

    try {
      const response = await goToBackend(config)

      if (!response.ok) throw new Error("Response not ok");

      // UI
      const t = [...todos];
      const index = t.findIndex(element => element.id === el.id);
      t.splice(index, 1);

      setTodos(t);
    } catch (error) {
      console.error(error);
    }
  }

  const goToBackend = (config, data) => {
    return fetch(config.url, {
      method: config.method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: data ? JSON.stringify(data) : null
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
      const response = await goToBackend(config, {done: value})

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

  const addTask = async (title) => {
    const exists = todos.find(e => title === e.title);

    if (exists) {
      alert(`La tarea "${title}" ya existe!`);
      return
    }

    // Cambio en el servidor
    const config = {
      url: URL,
      method: "POST"
    };

    const data = {
      title: title,
      done: false,
    }; 

    try {
      const response = await goToBackend(config, data);
      if (!response.ok) throw new Error("Response not ok");

      const todo = await response.json();

      // UI
      setTodos(todos.concat([todo]));
    } catch (error) {
      console.error(error);
    }
  }

  const filtered = todos.filter(e => !e.done || e.done === show);

  return (
    <div className="wrapper">
      <BrowserRouter>
        <div className="card frame">
          <Route path="/" exact render={props =>
            <Home 
              {...props}
              filtered={filtered}
              show={show}
              setShow={setShow}
              handleClickToggleDone={handleClickToggleDone}
              handleClickDelete={handleClickDelete}
              addTask={addTask}
            />
          } />
          <Route path="/details/:id" render={props =>
            <TodoDetails 
              {...props}
              url={URL}
            />
          } />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
