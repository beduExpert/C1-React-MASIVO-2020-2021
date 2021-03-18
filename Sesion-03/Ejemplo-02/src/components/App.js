import React from 'react';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';
import '../css/App.css';

class App extends React.Component {
  state = { todos: [] }

  componentDidMount() {
    this.setState({
      todos: [
        { title: "Sesión 1 (JSX)", done: true},
        { title: "Sesión 2 (Estado y propiedades)", done: true },
        { title: "Sesión 3 (Ciclo de vida)", done: true },
        { title: "Sesión 4 (Hooks)", done: false },
        { title: "Sesión 5 (Hooks)", done: false },
        { title: "Sesión 6 (Rutas)", done: false },
        { title: "Sesión 7 (PWA)", done: false },
        { title: "Sesión 8 (Material UI)", done: false },
      ],
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

  addTask = (title) => {
    this.setState({
      todos : this.state.todos.concat([{ title, done: false }])
    });
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
          <Form addTaskFn={this.addTask} />
        </div>
      </div>
    );
  }
}

export default App;
