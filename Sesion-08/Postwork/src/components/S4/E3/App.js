import React from 'react';

const App = () => {
	const [nombre, setNombre] = React.useState('')
	const [state, setState] = React.useState({
		profes: 0,
		alumnos: 0
	});

	const editarNombre = (event) => setNombre(event.target.value);
	const editarProfes = (event) => setState({
		...state,
		profes: event.target.value
	});
	const editarState = (atributo) => (event) => setState({
		...state,
		[atributo]: event.target.value
	});

	return (
		<div className="margen">
			<input onChange={editarNombre} />
			{nombre}
			<br /><br />

			<input type="number" onChange={editarState('profes')} />
			{state.profes}
			<br /><br />

			<input type="number" onChange={editarState('alumnos')} />
			{state.alumnos}
			<br /><br />
		</div>
	);
};

export default App;
