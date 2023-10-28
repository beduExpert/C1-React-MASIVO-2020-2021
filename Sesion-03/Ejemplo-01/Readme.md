[`React Fundamentals`](../../README.md) > [`Sesión 03: Estado (state) y Propiedades (props)`](../Readme.md) > `Ejemplo 1`

## Estado general de la aplicación

### OBJETIVO
- Modificar el estado.
- Tener un estado general de la aplicación y como opera en distintos componentes.

#### REQUISITOS 
- Tener Node instalado.

#### DESARROLLO

1. Convertimos nuestra `App.js` en un componente stateful (clase) para usar el estado.
```
import React from 'react';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';

class App extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <div className="card frame">
          <Header />
          <TodoList />
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
```

2. Agregamos un estado inicial que contendrá todas las tareas de la aplicación
```
import React from 'react';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';

class App extends React.Component {
  state = { todos: [] }

  render() {
    return (
      <div className="wrapper">
        <div className="card frame">
          <Header />
          <TodoList />
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
``` 

3. Usamos el estado en dónde esperamos recibirlo
```
import React from 'react';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';

class App extends React.Component {
  state = { todos: [] }

  render() {
    return (
      <div className="wrapper">
        <div className="card frame">
          <Header />
          <TodoList tasks={this.state.todos} />
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
``` 

4. Modificamos el componente que recibe este estado `TodoList`, iterando sobre las tareas recibidas.
```
import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import '../css/TodoList.css';

function TodoList(props) {
  return (
    <div className="list-wrapper">
      {
        props.tasks.map((e, i) => 
          <Todo
            key={i}
            done={e.done}
            title={e.title} 
          />
        )
      }
    </div>
  )
};

TodoList.propTypes = {
  tasks: PropTypes.array
}

TodoList.defaultProps = {
  tasks: []
}

export default TodoList;
```

5. Modificamos consecuentemente todos los componentes hijos en dicha rama del árbol.
```
import React from 'react';
import PropTypes from 'prop-types';
import '../css/Todo.css';
import Checkmark from './Checkmark';

class Todo extends React.Component {
  render () {
    return (
      <div className={`list-item ${this.props.done ? 'done' : ''}`}>
        {this.props.title}
        <div className="is-pulled-right">
          <Checkmark done={this.props.done} />
          <button className="delete is-pulled-right" />
        </div>
      </div>
    )
  }
}

Todo.propTypes = {
  done: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}

export default Todo;

```

6. Realizamos los últimos 3 pasos respectivamente con los siguientes componentes a modificiar (`Header`).
```
import React from 'react';
import PropTypes from 'prop-types';
import '../css/header.css';

function Header(props) {
  return (
    <div className="card-header">
      <h1 className="card-header-title header">
        Hay {props.counter} tareas
      </h1>
    </div>
  )
};

Header.propTypes = {
  counter: PropTypes.number
}

Header.defaultProps = {
  counter: 0
}

export default Header;
```

7. Cambiamos el estado original con una función que se ejecutará dándole click a un botón
```
import React from 'react';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';
import '../css/App.css';

class App extends React.Component {
  state = { todos: [] }

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
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="card frame">
          <Header counter={this.state.todos.length} />
          <TodoList tasks={this.state.todos} />
          <Form />
          <button onClick={this.handleClick} className="button init">
            Inicializar
          </button>
        </div>
      </div>
    );
  }
}

export default App;
```

8. Pintamos el botón que inicializa el estado solo cuándo el estado está vacío
```
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

  render() {
    return (
      <div className="wrapper">
        <div className="card frame">
          <Header counter={this.state.todos.length} />
          <TodoList tasks={this.state.todos} />
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

```

-------

[`Siguiente: Ejemplo-02`](../Ejemplo-02)
