[`React Fundamentals`](../../README.md) > [`Sesión 03: Estado (state) y Propiedades (props)`](../Readme.md) > `Ejemplo 2`

## Complejidad, bienvenida

### OBJETIVO
- Modificar el estado.
- Modificar estado del padre por medio de funciones mandadas como props.
- Introducción de los ciclos de vida: DidMount, WillUnmount, DidUpdate.
- Entender en que momento se ejecuta cada uno.
- Usar los eventos onClick y onChange.

#### REQUISITOS 
- Tener Node instalado.

#### DESARROLLO

1. Comenzar nuevo proyecto de React con el comando `npx create-react-app ejemplo2`.

2. Seguir las [buenas prácticas para empezar un proyecto](../../BuenasPracticas/EmpezandoProyectos/Readme.md).

3. Convertimos nuestra `App.js` en un componente stateful (clase) para usar el estado.
```
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            Hola Mundo!
         </div>
      );
   }
}

export default App;
```

4. Vamos a darle un margen a la aplicación para que no se vea en la mera esquina, creamos una clase CSS y se la ponemos a nuestro `div`.
```
.margen {
   margin: 100px;
}
``` 

5. Creamos los estados necesarios para este ejercicio.
```
import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         nombre: '',
         mensaje: '',
         listaNombres: ['Bedu']
      };
   }

   render() {
      return (
         <div className="margen">
            Hola Mundo!
         </div>
      );
   }
}

export default App;
``` 

6. Creamos un `<input />` y nos aseguramos que podamos escribir en él.
```
import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         nombre: '',
         mensaje: '',
         listaNombres: ['Bedu']
      };
   }

   render() {
      return (
         <div className="margen">
            <input />
         </div>
      );
   }
}

export default App;
```

7. Este va a ser el lugar en donde escribiremos el nombre para agregarlo a la lista de nombre. Para poder hacer eso necesitamos tener registro de lo que los usuarios estan escribiendo en el campo de texto.

8. Vamos a registrarlo con el estado de `nombre`.
```
<input value={this.state.nombre} />
```

9. Ahora nuestro `<input />` ya no funciona, esto es porque el valor siempre es un string vacio; ahora tenemos que cambiar el estado cada que el usuario escriba algo.
```
import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         nombre: '',
         mensaje: '',
         listaNombres: ['Bedu']
      };
   };

   handleInputChange = (event) => {
      this.setState({
         nombre: event.target.value
      });
   };

   render() {
      return (
         <div className="margen">
            <input
               value={this.state.nombre}
               onChange={this.handleInputChange}
            />
         </div>
      );
   }
}

export default App;
```

10. Nuestro campo de texto vuelve a funcionar.

11. Ahora vamos a desplegar los nombres que tenemos en nuestra lista usando la función de javascript `.map()`.
```
render() {
   return (
      <div className="margen">
         <input
            value={this.state.nombre}
            onChange={this.handleInputChange}
         />

         <ul>
            {this.state.listaNombres.map((nmbr) => (
               <li>
                  {nmbr}
               </li>
            ))}
         </ul>
      </div>
   );
}
```

12. Si abrimos la consola del navegador, nos va a dar un mensaje diciendo `Each child in a list should have a unique "key" prop`. Para arreglarlo hacemos lo siguiente:
```
{this.state.listaNombres.map((nmbr, key) => (
   <li key={key}>
      {nmbr}
   </li>
))}
```

13. Ya que estamos imprimiendo los nombres, vamos a agregar más nombres con un botón.
```
import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         nombre: '',
         mensaje: '',
         listaNombres: ['Bedu']
      };
   };

   handleInputChange = (event) => {
      this.setState({
         nombre: event.target.value
      });
   };

   handleClick = () => {
      const nombreEnEstado = this.state.nombre;
      if (!nombreEnEstado) return;

      const listaActualizada = [
         ...this.state.listaNombres,
         nombreEnEstado
      ];

      this.setState({
         nombre: '',
         listaNombres: listaActualizada,
      });
   };

   render() {
      return (
         <div className="margen">
            <input
               value={this.state.nombre}
               onChange={this.handleInputChange}
            />
            <button onClick={this.handleClick}>
               Agregar
            </button>

            <ul>
               {this.state.listaNombres.map((nmbr, key) => (
                  <li key={key}>
                     {nmbr}
                  </li>
               ))}
            </ul>
         </div>
      );
   }
}

export default App;
```

14. Nuestra función `handleClick()` se divide en 3 partes:
   - Validar si el nombre existe (que no este vacio).
   - Añadir el nombre a la lista de nombres.
   - Actualizar el estado (añadir nombre a la lista y limpiar el nombre).

15. Ahora podemos agregar nombres escribiendo en el campo de texto y picandole al botón.

16. Vamos a crear un nuevo componente llamado `Nombre.js` que reciba el parámetro de `nombre`; no olvides seguir las [buenas prácticas para las propiedades (props)](../../BuenasPracticas/PropTypes/Readme.md).
```
import React from 'react';
import PropTypes from 'prop-types';

const Nombre = (props) => {
   return (
      <div>
         {props.nombre}
      </div>
   );
};

Nombre.propTypes = {
   nombre: PropTypes.string.isRequired
}

export default Nombre;
```

17. Lo importamos y lo usamos en `App.js`.
```
import Nombre from './Nombre';
...
{this.state.listaNombres.map((nmbr, key) => (
   <li key={key}>
      <Nombre nombre={nmbr} />
   </li>
))}
...
```

18. Como vamos a usar el ciclo de vida en `Nombre.js`, necesitamos convertirlo en componente stateful (clase).
```
import React from 'react';
import PropTypes from 'prop-types';

class Nombre extends React.Component {
   render() {
      return (
         <div>
            {this.props.nombre}
         </div>
      );
   }
};

Nombre.propTypes = {
   nombre: PropTypes.string.isRequired
}

export default Nombre;
```

19. Vamos a agregarle el ciclo de vida más común, `componentDidMount` (cuando se inicializa).
```
import React from 'react';
import PropTypes from 'prop-types';

class Nombre extends React.Component {
   componentDidMount() {
      alert('Te damos la bienvenida ' + this.props.nombre);
   }

   render() {
      return (
         <div>
            {this.props.nombre}
         </div>
      );
   }
};

Nombre.propTypes = {
   nombre: PropTypes.string.isRequired
}

export default Nombre;
```

20. Si nos fijamos bien, cada que un nombre es agregado a la lista, una alerta nos aparece dándole la bienvenida a la lista. Lo que `componentDidMount` hace, es que ejecuta esa función cuando el componente se montó en el virtual DOM y esta listo para ser desplegado en pantalla. Se ejecuta una vez el componente este correcto y listo para verse.

21. Para poder ver el siguiente ciclo de vida, agreguemos un botón para eliminar nombres.
```
render() {
   return (
      <div>
         {this.props.nombre}
         <button>
            X
         </button>
      </div>
   );
}
```

22. Hacemos la lógica para eliminar ese nombre de la lista y se lo pasamos a `Nombre.js`. Es MUUUUUUY importante NO modificar la lista directamente, esto causa mutación de datos y es algo que siempre se debe de evitar.
```
...
borrarNombreDeLista = (key) => {
   const copiaDeLista = [...this.state.listaNombres];
   copiaDeLista.splice(key, 1);

   this.setState({
      listaNombres: copiaDeLista
   });
};
...
{this.state.listaNombres.map((nmbr, key) => (
   <li key={key}>
      <Nombre
         nombre={nmbr}
         borrarNombreDeLista={() => this.borrarNombreDeLista(key)}
      />
   </li>
))}
...
```

23. Ahora podemos agregar el siguiente ciclo de vida `componentWillUnmount` (cuando el componente se remueve).
```
import React from 'react';
import PropTypes from 'prop-types';

class Nombre extends React.Component {
   componentDidMount() {
      alert('Te damos la bienvenida ' + this.props.nombre);
   }

   componentWillUnmount() {
      alert('Adiós');
   }

   render() {
      return (
         <div>
            {this.props.nombre}
            <button onClick={this.props.borrarNombreDeLista}>
               X
            </button>
         </div>
      );
   }
};

Nombre.propTypes = {
   nombre: PropTypes.string.isRequired,
   borrarNombreDeLista: PropTypes.func.isRequired
}

export default Nombre;
```

24. Si nos fijamos bien, cada que un nombre es eliminado de la lista, una alerta nos despide. Lo que `componentWillUnmount` hace, es que ejecuta esa función cuando el componente se removió en el virtual DOM y esta listo para ser eliminado de la pantalla.

25. El siguiente ciclo de vida se ejecuta cada que algún estado cambia, el `componentDidUpdate`. Se lo agregamos a `App.js` debajo del constructor.
```
...
constructor(props) {
   super(props);
   this.state = {
      nombre: '',
      mensaje: '',
      listaNombres: ['Bedu']
   };
};

componentDidUpdate(prevProps, prevState) {
   if (this.state.listaNombres !== prevState.listaNombres) {
      this.setState({
         mensaje: `Longitud de la lista es: ${this.state.listaNombres.length}`
      })
   }
};
...
```

26. Agregamos el mensaje arriba del campo de texto y terminamos.
```
...
render() {
   return (
      <div className="margen">
         {this.state.mensaje}
         <br />
         <input
            value={this.state.nombre}
            onChange={this.handleInputChange}
         />
         <button onClick={this.handleClick}>
            Agregar
         </button>

         <ul>
            {this.state.listaNombres.map((nmbr, key) => (
               <li key={key}>
                  <Nombre
                     nombre={nmbr}
                     borrarNombreDeLista={() => this.borrarNombreDeLista(key)}
                  />
               </li>
            ))}
         </ul>
      </div>
   );
}
...
```

27. Resultado:
<img src="./public/resultado.gif">

-------

[`Siguiente: Reto-01`](../Reto-01)
