[`React Fundamentals`](../../README.md) > [`Sesión 02: Estado (state) y Propiedades (props)`](../Readme.md) > `Ejemplo 1`

## Patricio

### OBJETIVO 
- Usar componente stateful (clase).
- Convertir de stateless (funcional) a stateful (clase).
- Cómo declarar y usar el estado en componente stateful.

#### REQUISITOS
- Haber completado el [Ejemplo-02](../../Sesion-01/Ejemplo-02) de la Sesion-01.

#### DESARROLLO

1. Abrir nuestro proyecto "Lista de Tareas" del [Reto-01](../../Sesion-01/Reto-01) de la Sesion-01.

2. Ya tenemos una lista de tareas y vamos a definir un estado en cada tarea para saber si ya fue completada o no.

3. Abrimos nuestro archivo `Todo.js` y como primer paso tenemos que cambiar el tipo de componente a que sea stateful (componente clase).

4. Cambiamos la linea de declaración de esto: `function Todo() => {` a esto `class Todo extends React.Component {`; no va a funcionar porque todavia no terminamos.
```
import React from 'react';

class Todo extends React.Component {
  return (
    <div className="list-item">
      Tarea
      <button className="delete is-pulled-right" />
    </div>
  )
};

export default Todo;
```

5. Ahora vamos a añadir el `render()`, esto es lo que falta alrededor del `return`; con esto, nuestra applicación vuelve a funcionar.
```
import React from 'react';

class Luz extends React.Component {
  render () {
    return (
      <div className="list-item">
        Tarea
        <button className="delete is-pulled-right" />
      </div>
    )
  }
};

export default Todo;
``` 

6. Vamos a agregar el css necesario para mostrar la tarea completada.
```
import React from 'react';
import '../css/Todo.css';

class Luz extends React.Component {
  render () {
    return (
      <div className="list-item">
        Tarea
        <button className="delete is-pulled-right" />
      </div>
    )
  }
};

export default Todo;
```

7. Vamos a agregar el estado del componente a nivel de la clase
```
import React from 'react';
import '../css/Todo.css';

class Todo extends React.Component {
  state = {
    done: true,
  }

  render () {
    return (
      <div className="list-item">
        Tarea
        <button className="delete is-pulled-right" />
      </div>
    )
  }
}

export default Todo;

```

8. Utilizamos el estado para pintar una clase (de css) o no, dependiendo del estado (true/false en este caso)
```
import React from 'react';
import '../css/Todo.css';

class Todo extends React.Component {
  state = {
    done: true,
  }

  render () {
    return (
      <div className={`list-item ${this.state.done ? 'done' : ''}`}>
        Tarea
        <button className="delete is-pulled-right" />
      </div>
    )
  }
}

export default Todo;
```

[`Siguiente: Ejemplo-02`](../Ejemplo-02)
