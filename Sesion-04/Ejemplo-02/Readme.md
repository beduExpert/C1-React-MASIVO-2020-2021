[`React Fundamentals`](../../README.md) > [`Sesión 04: Hooks y useState`](../Readme.md) > `Ejemplo 2`

## Patricio evoluciona

### OBJETIVO
- De componente stateful (clase) a hook.

#### REQUISITOS
- Haber completado el [Ejemplo-01](../../Sesion-02/Ejemplo-01) de la Sesion-02.

#### DESARROLLO

1. Abrir nuestro proyecto "Patricio" del [Ejemplo-01](../../Sesion-02/Ejemplo-01) de la Sesion-02.

2. Ya tenemos nuestros focos bien hermosos usando el estado de la manera vieja, vamos a convertir nuestros componentes de stateful (clase) a hooks.

3. Abrimos nuestro archivo `Luz.js` y como primer paso tenemos que cambiar el tipo de componente a que sea stateless (componente funcional).

4. Cambiamos la línea de declaración de esto: `class Luz extends React.Component {` a esto `const Luz = () => {`; no va a funcionar porque todavia no terminamos.
```
import React from 'react';
import '../css/Luz.css';

const Luz = () => {
   constructor(props) {
      super(props);
      this.state = {
         color: 'pink'
      };
   }

   render() {
      return (
         <div style={{ backgroundColor: this.state.color }} className="luz">
         </div>
      );
   }
};

export default Luz;
```

5. Ahora vamos a remover el `render()`, sacando el `return` y poniendolo como declaración directa `Luz`.
```
import React from 'react';
import '../css/Luz.css';

const Luz = () => {
   constructor(props) {
      super(props);
      this.state = {
         color: 'pink'
      };
   }

   return (
      <div style={{ backgroundColor: this.state.color }} className="luz">
      </div>
   );
};

export default Luz;
``` 

6. Dejamos de usar el `constructor`, declaramos el color con `useState` y corregimos para NO usar `this.state.color`; nuestra aplicación vuelve a funcionar.
```
import React from 'react';
import '../css/Luz.css';

const Luz = () => {
   const [color, setColor] = React.useState('pink');

   return (
      <div style={{ backgroundColor: color }} className="luz">
      </div>
   );
};

export default Luz;
```

7. Acabamos de convertir el componente `Luz.js` exitosamente, ahora vamos a hacer lo mismo con el componente `LuzMercurial.js`.

8. Cambiamos la línea de declaración de esto: `class LuzMercurial extends React.Component {` a esto `const LuzMercurial = () => {`; no va a funcionar porque todavía no terminamos.
```
import React from 'react';

const LuzMercurial = () => {
   constructor(props) {
      super(props);
      this.state = {
         color: 'pink'
      };
   }

   render() {
      return (
         <div
            className="luzMercurial"
            style={{ backgroundColor: this.state.color }}
         />
      );
   }
};

export default LuzMercurial;
```

9. Ahora vamos a remover el `render()`, sacando el `return` y poniendolo como declaración directa `LuzMercurial`.
```
import React from 'react';

const LuzMercurial = () => {
   constructor(props) {
      super(props);
      this.state = {
         color: 'pink'
      };
   }

   return (
      <div
         className="luzMercurial"
         style={{ backgroundColor: this.state.color }}
      />
   );
};

export default LuzMercurial;
```

10. Dejamos de usar el `constructor`, declaramos el color con `useState` y corregimos para NO usar `this.state.color`.
```
import React from 'react';

const LuzMercurial = () => {
   const [color, setColor] = React.useState('pink');

   return (
      <div
         className="luzMercurial"
         style={{ backgroundColor: color }}
      />
   );
};

export default LuzMercurial;
```

11. Ahora ya sabemos como convertir de stateful (clase) a hooks.

12. Resultado
<img src="./public/resultado.png" width="400">

-------

[`Siguiente: Reto-02`](../Reto-02)
