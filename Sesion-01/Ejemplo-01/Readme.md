[`React Fundamentals`](../../README.md) > [`Sesión 01: Fundamentos de React`](../Readme.md) > `Ejemplo 1`

## Lista de Tareas

### OBJETIVO 
- Comenzar proyectos con buenas prácticas.
- Diferenciar HTML y JSX.
- Conocer 2 maneras de usar CSS con React.

#### REQUISITOS 
- Tener Node instalado.

#### DESARROLLO

1. Comenzar nuevo proyecto de React con el comando `npx create-react-app ejemplo1`.

2. Seguir las [buenas prácticas para empezar un proyecto](../../BuenasPracticas/EmpezandoProyectos/Readme.md).

3. Crear nuestro `div` principal que nos servira como wrapper(envoltura).
```
import React from 'react';

function App() {
  return (
    <div className="wrapper">
    </div>
  );
}

export default App;
```

4. Ir a `index.css` para crear el CSS de nuestro techo.
```
.wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

5. Crear otro `div` hijo que nos servirá como marco. Notar primer diferencia en como usamos las clases de CSS.
```
import React from 'react';

function App() {
  return (
    <div className="wrapper">
      <div className="card frame">
      </div>
    </div>
  );
}

export default App;
``` 

6. Creamos nuevo componente dentro de la carpeta `components` como `Header.js`.
```
import React from 'react';

function Header() {
  return (
    <div className="card-header">
      <h1 className="card-header-title header">
        Hay 0 tareas
      </h1>
    </div>
  )
};

export default Header;
```

7. Creamos un nuevo css en `css` para almacenar el css de este nuevo compoente `header.css`
```
.header {
  display: inline;
  text-align: center;
}
```


8. Importamos el componente en `App.js` y lo usamos. Hay que notar que podemos usar componentes en 1 sola linea.
```
import React from 'react';
import Header from './Header';

function App() {
  return (
    <div className="wrapper">
      <div className="card frame">
        <Header />
      </div>
    </div>
  );
}

export default App;
```

9. De manera análoga hacemos lo propio con el componente `Form`
```
import React from 'react';
import Header from './Header';
import Form from './Form';

function App() {
  return (
    <div className="wrapper">
      <div className="card frame">
        <Header />
        <Form />
      </div>
    </div>
  );
}

export default App;
```
-------

[`Siguiente: Reto-01`](../Reto-01)
