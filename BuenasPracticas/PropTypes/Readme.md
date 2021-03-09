## Buenas prácticas para propiedades (props)

1. Importamos la librería necesaria que ya viene incluida en `npx create-react-app`.
```
import PropTypes from 'prop-types';
```

2. Definimos cada una de las propiedades (props) que se estan usando en el componente con su tipo específico.

3. Estas son las formas más comunes de validar:
```
ComponenteEjemplo.propTypes = {
   funcion: PropTypes.func,

   booleano: PropTypes.bool,

   textoOpcional: PropTypes.string,
   textoRequerido: PropTypes.string.isRequired,

   numeroOpcional: PropTypes.number,
   numeroRequerido: PropTypes.number.isRequired,

   arreglo : PropTypes.array,
   objeto: PropTypes.shape({
      atributo1: PropTypes.string,
      atributo2: PropTypes.bool.isRequired
   })
}
```

4. Cada que algo sea requerido, solo hay que poner `.isRequired` al final.
```
textoRequerido: PropTypes.string.isRequired
```

5. Este pedazo de código es recomendado ponerlo entre el mismo componente y el `export default ComponenteEjemplo;`; pero en realidad se puede poner donde uno quiera.
```
import React from 'react';
import PropTypes from 'prop-types';

const ComponenteEjemplo = (props) => {
   return (
      <div />
   );
};

ComponenteEjemplo.propTypes = {
   funcion: PropTypes.func,

   booleano: PropTypes.bool,

   textoOpcional: PropTypes.string,
   textoRequerido: PropTypes.string.isRequired,

   numeroOpcional: PropTypes.number,
   numeroRequerido: PropTypes.number.isRequired,

   arreglo : PropTypes.array,
   objeto: PropTypes.shape({
      atributo1: PropTypes.string,
      atributo2: PropTypes.bool.isRequired
   })
}

export default ComponenteEjemplo;
```

6. IMPORTANTE, solo validar las propiedades (props) que estan siendo utilizadas en el componente y no todas las que se le estan pasando.
```
import React from 'react';
import PropTypes from 'prop-types';

const ComponenteEjemplo = (props) => {
   return (
      <div onClick={props.funcion}>
         {props.textoRequerido}
      </div>
   );
};

ComponenteEjemplo.propTypes = {
   funcion: PropTypes.func.isRequired,
   textoRequerido: PropTypes.string.isRequired
}

export default ComponenteEjemplo;
```

7. Puedes aprender más visitando la [documentación oficial](https://es.reactjs.org/docs/typechecking-with-proptypes.html#proptypes).

8. Seguir estos pasos no es obligatorio, pero es recomendado para facilitar el entendimiento y flujo. Esto es muy útil para los demás desarrolladores y para el "yo" del futuro. Además de que sirve como documentación.
