import React from 'react';
import FilaFocos from './FilaFocos';
import FocoMercurial from './FocoMercurial';

function App() {
	return (
		<div id="techo2">
			<FocoMercurial color="green" />
			<FilaFocos />
			<FocoMercurial color="brown" />
			<FocoMercurial />
		</div>
	);
}

export default App;
