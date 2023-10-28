[`React Fundamentals`](../../README.md) > [`Sesión 02: Estado (state) y Propiedades (props)`](../Readme.md) > `Ejemplo 2`

## Proptypes y propiedades (props)

### OBJETIVO 
- **Declaración** y **utilización de propiedades (props)**.
- **Buenas prácticas** de propiedades (librería prop-types).

#### REQUISITOS 
- Completar el [Ejemplo-01](../Ejemplo-01)

#### DESARROLLO

1. Abrir el proyecto del [Ejemplo-01](../Ejemplo-01).

2. Las Tareas (Todo) tienen un estado que dicta si están completadas o no.

3. Vamos a hacer que `Todo.js` pueda recibir si está completada o no, a través de propiedades (props).

4. Primero vamos a `TodoList.js` que es el padre directo de `Todo.js` y mandamos un `true/false` a cada Tarea `<Todo done />`.
```
import React from 'react';
import Todo from './Todo';
import '../css/TodoList.css';

function TodoList() {
  return (
    <div className="list-wrapper">
      <Todo done/>
      <Todo />
      <Todo done/>
      <Todo />
    </div>
  )
};

export default TodoList;
```

5. Tenemos que obtener ese `done` (true/false) en Todo y responder a él.
```
import React from 'react';
import '../css/Todo.css';

class Todo extends React.Component {
  render () {
    return (
      <div className={`list-item ${this.props.done ? 'done' : ''}`}>
        Tarea
        <button className="delete is-pulled-right" />
      </div>
    )
  }
}

export default Todo;
```

6. `Todo.js` nos va a quedar así:
```
import React from 'react';
import PropTypes from 'prop-types';
import '../css/Todo.css';

class Todo extends React.Component {
  render () {
    return (
      <div className={`list-item ${this.props.done ? 'done' : ''}`}>
        Tarea
        <button className="delete is-pulled-right" />
      </div>
    )
  }
}

Todo.propTypes = {
  done: PropTypes.bool,
}

export default Todo;``
```

[`Siguiente: Reto-01`](../Reto-01)
