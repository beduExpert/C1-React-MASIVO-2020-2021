import React from 'react';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';
import '../css/App.css';

class App extends React.Component {
  state = { todos: [], showButton: true }

  handleClick = (e) => {
    this.setState({
      todos: [
        { title: "Tarea 1", done: true },
        { title: "Tarea 2", done: false },
        { title: "Tarea 3", done: true },
        { title: "Tarea 4", done: false },
        { title: "Tarea 5", done: true },
        { title: "Tarea 6", done: false },
        { title: "Tarea 7", done: true },
        { title: "Tarea 8", done: false },
        { title: "Tarea 9", done: true },
        { title: "Tarea 10", done: false },
      ],
      showButton: false,
    })
  }

  handleClickDelete = (e, index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);

    this.setState({ todos: todos });
  }

  handleClickToggleDone = (e, index) => {
    const todos = [...this.state.todos];
    todos[index].done = !todos[index].done;

    this.setState({ todos });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="card frame">
          <Header counter={this.state.todos.length} />
          <TodoList 
            tasks={this.state.todos} 
            toggleFn={this.handleClickToggleDone}
            deleteFn={this.handleClickDelete}
          />
          <Form />
          {
            this.state.showButton &&
              <button onClick={this.handleClick} className="button init">
                Inicializar
              </button>
          }
        </div>
      </div>
    );
  }
}

export default App;
