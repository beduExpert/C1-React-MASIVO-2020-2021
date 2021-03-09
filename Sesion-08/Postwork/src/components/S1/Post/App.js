import React from 'react';
import Foco from './Foco';
import FocoMercurial from './FocoMercurial';

function App() {
   return (
      <div id="techo2">
         <div className="filaFocos">
            <Foco />
         </div>

         <FocoMercurial />

         <div className="filaFocos">
            <Foco />
            <Foco />
         </div>

         <FocoMercurial />

         <div className="filaFocos">
            <Foco />
            <Foco />
            <Foco />
         </div>
      </div>
   );
}

export default App;
