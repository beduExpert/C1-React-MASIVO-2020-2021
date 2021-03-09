
import React from 'react';
import Foco from './Foco';

function App() {
   return (
      <div id="techo">
         <Foco />
         <Foco />
      </div>
   );
}

export default App;


/*

Crear un techo reutilizable:
IMPORTANTE - En cada paso se debe de enseñar la diferencia en el navegador

01- crear div principal con id techo
02- ir a index.css para crear el id
03- crear div con clase foco, marcar observacion de className en lugar de class
04- index.css clase de foco
05- querer replicar el mismo foco, copiar y pegar foco (se corregira mas adelante)
06- resaltar que los focos estan mal acomodados, corregir con flexbox
07- eliminar la palabra techo
08- resaltar que estamos repitiendo exactamente lo mismo en foco; crear nuevo componente (src/components/Foco) como arrow function
09- importar componente en App.js y usarlo (explicar el componente de una sola etiqueta <Foco />)
10- crear componente Luz, importarlo y usarlo en Foco, remover la palabra foco
11- como necesitamos que la luz este enmedio, hacemos que el foco sea flex
12- ahora vamos a agregarle color a la luz usando un nuevo css, creamos archivo Luz.css (src/css/Luz.css)
13- importamos el css en el componente y lo usamos, eliminar la palabra luz; explicar que ya se conocen 2 maneras de usar css, por componente o global

*/