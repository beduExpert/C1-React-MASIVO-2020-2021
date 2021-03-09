import React from 'react';
import Boton from './Boton';

const App = () => {
	const [contador, setContador] = React.useState(0);

	const handleClick = () => {
		setContador(contador + 1);
	};

	return (
		<div className="margen">
			<Boton
			   texto={contador}
			   handleClick={handleClick}
			/>
		</div>
	);
};

export default App;
