[`React Fundamentals`](../../README.md) > [`Sesión 02: Estado (state) y Propiedades (props)`](../Readme.md) > `Ejemplo 1`

## Patricio

### OBJETIVO 
- Usar componente stateful (clase).
- Convertir de stateless (funcional) a stateful (clase).
- Cómo declarar y usar el estado en componente stateful.

#### REQUISITOS
- Haber completado el [Ejemplo-02](../../Sesion-01/Ejemplo-02) de la Sesion-01.

#### DESARROLLO

1. Abrir nuestro proyecto "Luz Mercurial" del [Ejemplo-02](../../Sesion-01/Ejemplo-02) de la Sesion-01.

2. Ya tenemos nuestros focos con luces naranjas, lo que vamos a hacer es definir el color de las luces con el estado de React.

3. Abrimos nuestro archivo `Luz.js` y como primer paso tenemos que cambiar el tipo de componente a que sea stateful (componente clase).

4. Cambiamos la linea de declaración de esto: `const Luz = () => {` a esto `class Luz extends React.Component {`; no va a funcionar porque todavia no terminamos.
```
import React from 'react';
import '../css/Luz.css';

class Luz extends React.Component {
   return (
      <div className="luz">
      </div>
   );
};

export default Luz;
```

5. Ahora vamos a añadir el `render()`, esto es lo que falta alrededor del `return`; con esto, nuestra applicación vuelve a funcionar.
```
import React from 'react';
import '../css/Luz.css';

class Luz extends React.Component {
   render() {
      return (
         <div className="luz">
         </div>
      );
   }
};

export default Luz;
``` 

6. Vamos a declarar nuestro estado del componente añadiendo el `constructor`.
```
import React from 'react';
import '../css/Luz.css';

class Luz extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         color: 'pink'
      };
   }

   render() {
      return (
         <div className="luz">
         </div>
      );
   }
};

export default Luz;
```

7. Vamos a sobreescribir el CSS del componente, poniendole el color directamente en la etiqueta JSX.
```
import React from 'react';
import '../css/Luz.css';

class Luz extends React.Component {
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

8. Cuando vemos el resultado nos da alegría de saber que es casi tan hermoso como nosotros (paso obligatorio).

9. Vamos a hacer lo mismo con `LuzMercurial.js`; convertirlo en componente stateful (clase), agregar el estado (state) con algún color y sobreescribirlo.
```
import React from 'react';

class LuzMercurial extends React.Component {
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

10. Resultado
<img src="./public/resultado.png" width="400">

[`Siguiente: Reto-01`](../Reto-01)
