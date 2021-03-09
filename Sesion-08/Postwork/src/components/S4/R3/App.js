import React from 'react';

const App = () => {
	const [state, setState] = React.useState({
		nombre: '',
		apellidos: [
			'',	// Materno
			''    // Paterno
		]
	});

	const editarNombre = (event) => setState({
		...state,
		nombre: event.target.value
	});
	const editarApellido = (key) => (event) => {
		const copiaApellidos = [...state.apellidos];
		copiaApellidos[key] = event.target.value;

		setState({
			...state,
			apellidos: copiaApellidos
		});
	}

	return (
		<div className="margen">
			<input onChange={editarNombre} />
			<input onChange={editarApellido(0)} />
			<input onChange={editarApellido(1)} />

			<br /><br />
			Mi nombre es:
			<br />
			<b>
				{state.nombre} {state.apellidos[0]} {state.apellidos[1]}
			</b>
		</div>
	);
};

export default App;
