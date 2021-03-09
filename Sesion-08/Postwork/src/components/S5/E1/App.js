import React from 'react';
import Nombre from './Nombre';

const App = () => {
	const [state, setState] = React.useState({
		nombre: '',
		mensaje: '',
		listaNombres: ['Bedu']
	});

	const didUpdate = () => {
		setState({
			...state,
			mensaje: `Longitud de la lista es: ${state.listaNombres.length}`
		});
	};
	React.useEffect(didUpdate, [state.listaNombres]);

	const handleInputChange = (event) => {
		setState({
			...state,
			nombre: event.target.value
		});
	};

	const handleClick = () => {
		const nombreEnEstado = state.nombre;
		if (!nombreEnEstado) return;

		const listaActualizada = [
			...state.listaNombres,
			nombreEnEstado
		];

		setState({
			...state,
			nombre: '',
			listaNombres: listaActualizada,
		});
	};

	const borrarNombreDeLista = (key) => {
		const copiaDeLista = [...state.listaNombres];
		copiaDeLista.splice(key, 1);

		setState({
			...state,
			listaNombres: copiaDeLista
		});
	};

	return (
		<div className="margen">
			{state.mensaje}
			<br />
			<input
				value={state.nombre}
				onChange={handleInputChange}
			/>
			<button onClick={handleClick}>
				Agregar
			</button>

			<ul>
				{state.listaNombres.map((nmbr, key) => (
					<li key={key}>
						<Nombre
							nombre={nmbr}
							borrarNombreDeLista={() => borrarNombreDeLista(key)}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
