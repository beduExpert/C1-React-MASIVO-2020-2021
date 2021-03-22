[`React Fundamentals`](../../README.md) > [`Sesión 04: Hooks y useState`](../Readme.md) > `Ejemplo 2`

## Componente de clase a funcional

### OBJETIVO
- De componente stateful (clase) a hook.

#### REQUISITOS
- Haber completado el [Ejemplo-01](../../Sesion-04/Ejemplo-01) de la Sesion-04.

#### DESARROLLO

1. Cambiamos el componente `Todo`
```
import React from 'react';
import PropTypes from 'prop-types';
import '../css/Todo.css';
import Checkmark from './Checkmark';

function Todo(props) {
  return (
    <div className={`list-item ${props.done ? 'done' : ''}`}>
      {props.title}
      <div className="is-pulled-right">
        <Checkmark 
          toggleFn={props.toggleFn}
          done={props.done}
        />
        <button 
          className="delete is-pulled-right"
          onClick={e => props.deleteFn(e)}
        />
      </div>
    </div>
  )
}

Todo.propTypes = {
  deleteFn: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  toggleFn: PropTypes.func.isRequired
}

export default Todo;
```

-------

[`Siguiente: Reto-01`](../Reto-01)
