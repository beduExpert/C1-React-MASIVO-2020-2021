import React from 'react';
import Genero from './Genero';

const App = () => {
	const [genero, setGenero] = React.useState('');

	const cambiarGenero = (event) => setGenero(event.target.value);

	const renderizarGenero = () => {
		if (genero === 'nina') {
			return <Genero color="pink" />
		}
		if (genero === 'nino') {
			return <Genero color="blue" />
		}
	};

	return (
		<div className="margen">
			<input
				id="nina"
				value="nina"
				type="radio"
				name="genero"
				onClick={cambiarGenero}
			/>
			<label htmlFor="nina">Niña</label>
			<br />

			<input
				id="nino"
				value="nino"
				type="radio"
				name="genero"
				onClick={cambiarGenero}
			/>
			<label htmlFor="nino">Niño</label>
			<br /><br />

			{renderizarGenero()}
		</div>
	);
};

export default App;
