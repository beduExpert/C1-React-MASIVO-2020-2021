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
      const response = await fetch(URL);
      const data = await response.json();
      setTodos(data);
    };

    getData();
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
