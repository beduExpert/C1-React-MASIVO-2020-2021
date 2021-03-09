[`React Fundamentals`](../../README.md) > [`Sesión 01: Fundamentos de React`](../Readme.md) > `Ejemplo 2`

## Luz Mercurial

### OBJETIVO 
- Practicar creacion y reutilización de componentes.
- Practicar flexbox.

#### REQUISITOS 
- Tener Node instalado.
- Completar el [Ejemplo-01](../Ejemplo-01)

#### DESARROLLO

1. Abrir nuestro proyecto "Techo del cielo" del [Ejemplo-01](../Ejemplo-01).

2. En este momento tenemos una única fila de 2 focos, ahora vamos a agregarle 2 filas más para terminar con 3 filas en total.

3. La primera idea que se nos puede ocurrir es agregar otro foco mercurial y añadirlo a la lista, vamos a intentarlo con `<Foco />` y ver como queda.
```
import React from 'react';
import Foco from './Foco';

function App() {
   return (
      <div id="techo">
         <Foco />
         <Foco />
         <Foco />
      </div>
   );
}

export default App;
```

4. Si nos damos cuenta esta no es la manera de hacerlo porque esta agregando otro `<Foco />` a la fila actual.


5. Vamos a separarlos por fila creando un nuevo componente llamado `FilaFocos.js`.
```
import React from 'react';

const FilaFocos = () => {
   return (
      <div className="filaFocos">
         FilaFocos
      </div>
   );
};

export default FilaFocos;
``` 

6. Tomar la decisión de usar CSS por componente o global y añadir el siguiente CSS.
```
.filaFocos {
   display: flex;
   align-items: center;
   justify-content: space-around;
}
```

7. Importar y usar el nuevo componente de la fila.
```
import React from 'react';
import Foco from './Foco';
import FilaFocos from './FilaFocos';

function App() {
   return (
      <div id="techo">
         <FilaFocos />
         <Foco />
         <Foco />
      </div>
   );
}

export default App;
```

8. Si nos damos cuenta, quedo igual de mal que al principio jeje. Lo que necesitamos es que los componentes se vean en forma de columna y no de fila, por lo que pasamos a arreglar el techo con `flex-direction`.
```
#techo {
   width: 600px;
   height: 600px;
   background-color: skyblue;
   display: flex;
   align-items: center;
   justify-content: space-around;
   flex-direction: column;
}
```

9. Ahora vamos a hacer que nuestra `<FilaFocos />` muestre 2 `<Foco />`.
```
import React from 'react';
import Foco from './Foco';

const FilaFocos = () => {
   return (
      <div className="filaFocos">
         <Foco />
         <Foco />
      </div>
   );
};

export default FilaFocos;
```

10. Ya casi, el problema ahora es que nuestra `<FilaFocos />` no tiene su propio `width` ya que este depende de la longitud de sus hijos, demosle una en el CSS.
```
.filaFocos {
   display: flex;
   align-items: center;
   justify-content: space-around;
   width: 80%;
}
```

11. Felicidades! Ya creamos nuestra fila de focos normales, vamos a empezar a hacer nuestro foco mercurial.

12. Creamos nuevo componente `FocoMercurial.js`.
```
import React from 'react';

const FocoMercurial = () => {
   return (
      <div className="focoMercurial">
         FocoMercurial
      </div>
   );
};

export default FocoMercurial;
```

13. Le damos su CSS para que no se ponga celoso.
```
.focoMercurial {
   display: flex;
   align-items: center;
   justify-content: space-around;
   width: 80%;
   height: 100px;
   background-color: white;
}
```

14. Lo importamos y usamos en `App.js`.
```
import React from 'react';
import FilaFocos from './FilaFocos';
import FocoMercurial from './FocoMercurial';

function App() {
   return (
      <div id="techo">
         <FocoMercurial />
         <FilaFocos />
         <FocoMercurial />
      </div>
   );
}

export default App;
```

15. Continuamos y creamos la `LuzMercurial.js`.
```
import React from 'react';

const LuzMercurial = () => {
   return (
      <div className="luzMercurial" />
   );
};

export default LuzMercurial;
```

16. Creamos su CSS.
```
.luzMercurial {
   width: 80%;
   height: 50px;
   background-color: orange;
}
```

17. Importamos el componente y lo usamos en `FocoMercurial.js`.

18. Resultado
<img src="./public/resultado.png" width="400">

-------

[`Siguiente: Reto-02`](../Reto-02)
