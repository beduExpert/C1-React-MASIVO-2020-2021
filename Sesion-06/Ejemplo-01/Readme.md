[`React Fundamentals`](../../README.md) > [`Sesión 06: Rutas con react router dom`](../Readme.md) > `Ejemplo 1`

## Anatomía

### OBJETIVO
- react router dom.
- route
- route params

#### REQUISITOS 
- Tener Node instalado.

#### DESARROLLO

1. Abrir el proyecto en el último reto.

2. Vamos a agregar información a nuestras tareas en el backend.
```
{
  "todos": [
    {
      "id": 1,
      "title": "Sesión 1 (JSX)",
      "details": ["HTML o JSX", "MVC"],
      "done": true
    },
    {
      "id": 2,
      "title": "Sesión 2 (Estado y propiedades)",
      "details": ["this.setState", "this.props", "componentes statefull vs stateless"],
      "done": true
    },
    {
      "id": 3,
      "title": "Sesión 3 (Ciclo de vida)",
      "details": ["componentDidMount", "this.setState"],
      "done": true
    },
    {
      "id": 4,
      "title": "Sesión 4 (Hooks)",
      "details": ["useState", "componentes stateless"],
      "done": false
    },
    {
      "id": 5,
      "title": "Sesión 5 (Hooks)",
      "details": ["useState", "useEffect"],
      "done": false
    },
    {
      "id": 6,
      "title": "Sesión 6 (Rutas)",
      "details": ["react-router-dom", "useHistory"],
      "done": false
    },
    {
      "id": 7,
      "title": "Sesión 7 (PWA)",
      "details": ["con qué se come eso"],
      "done": false
    },
    {
      "id": 8,
      "title": "Sesión 8 (Material UI)",
      "details": ["así sin codear CSS, qué fácil!"],
      "done": false
    }
  ]
}
``` 

3. Iniciamos el servidor (backend `npm start`) y verificamos podemos consumir el API `http://localhost:4000/todos`

4. En el proyecto de frontend, instalamos `react-router-dom` con `npm install --save react-router-dom`

5. Agregamos los componentes `BrowserRouter` y `Route` al componente `App` para poderlos usar.
```
import { BrowserRouter, Route } from 'react-router-dom';
```

6. Envolvemos con `BrowserRouter` a partir del nodo que queremos tenga rutas.
```
// ... código omitido ...
import { BrowserRouter, Route } from 'react-router-dom';
// ... código omitido ...

function App() {
  // ... código omitido ...

  return (
    <div className="wrapper">
      <BrowserRouter>
        <div className="card frame">
          <Route path="/" exact render={() => <div>Raíz</div>} />
          <Route path="/test" render={() => <div>Test</div>} />
        </div>
      </BrowserRouter>
    </div>
  )

  // ... código omitido ...
```

7. Refactorizamos toda la vista que ahora será `Home`
```
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';

function Home(props) {
  return (
    <>
      <Header
        counter={props.filtered.length}
        show={props.show}
        toggleDone={props.setShow}
      />
      <TodoList 
        tasks={props.filtered}
        toggleFn={props.handleClickToggleDone}
        deleteFn={props.handleClickDelete}
      />
      <Form addTaskFn={props.addTask} />
    </>
  )
};

Home.propTypes = {
  filtered: PropTypes.array.isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  handleClickToggleDone: PropTypes.func.isRequired,
  handleClickDelete: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
}

export default Home;
```

8. Notemos que ahora recibiremos en `Home` un montón de props de `App`. También veamos `<> y </>` que es la forma abreviada en que React pone un `Fragment`.


9. Refactorizamos `App` para pasar los props a `Home`.
```
// ... código omitido ...
import { BrowserRouter, Route } from 'react-router-dom';
// ... código omitido ...

function App() {
  // ... código omitido ...

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
        </div>
      </BrowserRouter>
    </div>
  )

  // ... código omitido ...
```

10. Nuestra aplicación ya tiene un ruteador pero visualmente no notamos cambio. Eso viene haciendo uso de más rutas y funcionalidad alrededor de ellas.

11. Agregamos un componente `TodoDetails` dónde pintaremos los detalles que al principio agregamos al backend.
```
import React from 'react';
import PropTypes from 'prop-types';

function TodoDetails(props) {
  const [todo, setTodo] = React.useState({ title: "", details: [] });
  const id = props.match.params.id;

  React.useEffect(function() {
    const getData = async () => {
      try {
        const response = await fetch(`${props.url}/${id}`);
        const t = await response.json();

        setTodo(t);
      } catch(e) {
        console.error(e);
      }
    };

    getData();
  }, [id, props.url]);

  return (
    <>
    <div className="card-header">
      <h1 className="card-header-title header">
        {todo.title}
      </h1 >
    </div>
    <div className="list-wrapper">
      {
        todo.details.map((detail, i) => 
          <div key={i} className="list-item">
            { detail }
          </div>
        )
      }
    </div>
    </>
  )
}

TodoDetails.propTypes = {
  url: PropTypes.string.isRequired
};

export default TodoDetails;

```

12. Toda componente que es hijo directo de una ruta tiene props propias del ruteador. A saber `match` tiene una propiedad que es `params` y ahí vienen los parámetros de la URL que le pasaremos. Con ese parametro `id` iremos al backend a descargar la información propia de la tarea con dicho id.

13. Ahora modificamos `App` para usar `TodoDetails`.
```
  // ... código omitido ...
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
  // ... código omitido ...
```

14. En la propiedad `render` estamos creando un componente funcional, que solo sirve para poder usar `TodoDetails` con las props que queremos computadas en el componente `App`

[`Siguiente: Reto-01`](../Reto-01)
