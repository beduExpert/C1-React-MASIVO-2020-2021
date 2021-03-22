[`React Fundamentals`](../../README.md) > [`Sesión 03: Estado (state) y Propiedades (props)`](../Readme.md) > `Ejemplo 2`

## Complejidad, bienvenida

### OBJETIVO
- Introducción de los ciclos de vida.

#### REQUISITOS 
- Tener Node instalado.

#### DESARROLLO

l. Implementamos un método propio de las clases de React `componentDidMount`
```
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

```

4. Agregamos una función que agregue tareas y lo conectamos con el botón necesario
```
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
``` 

5. Modificamos el componente `Form` para que soporte tener estado dónde lo que se ponga en el `input` será almacenado.
```
import React from 'react';
import PropTypes from 'prop-types';
import '../css/form.css';

class Form extends React.Component {
  state = { value: '' }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addTaskFn(this.state.value);

    this.setState({ value: '' });
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} >
        <input 
          type='text'
          className='input'
          onChange={this.handleChange}
          placeholder='Agrega una tarea'
          value={this.state.value}
        />
        <button className='button'>Enviar</button>
      </form>
    )
  };
}

Form.propTypes = {
  addTaskFn: PropTypes.func.isRequired
}

export default Form;

``` 

-------

[`Siguiente: Reto-02`](../Reto-02)
