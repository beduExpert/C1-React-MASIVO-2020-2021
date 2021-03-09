import React from 'react';
import Tarea from './Tarea';

const App = () => {
	const [state, setState] = React.useState({
		tarea: '',
		mensaje: '',
		listaTareas: ['Hacer reto 2']
	});

	const didUpdate = () => {
		setState({
			...state,
			mensaje: `Por hacer: ${state.listaTareas.length}`
		});
	};
	React.useEffect(didUpdate, [state.listaTareas]);

	const handleInputChange = (event) => {
		setState({
			...state,
			tarea: event.target.value
		});
	};

	const handleClick = () => {
		const tareaEnEstado = state.tarea;
		if (!tareaEnEstado) return;

		const tareaYaExiste = state.listaTareas.find(
			(existente) => existente === tareaEnEstado
		);
		if (tareaYaExiste) return alert(`Tarea "${tareaEnEstado}" ya existe.`);

		const listaActualizada = [
			...state.listaTareas,
			tareaEnEstado
		];

		setState({
			...state,
			tarea: '',
			listaTareas: listaActualizada,
		});
	};

	const borrarTarea = (key) => {
		const copiaDeLista = [...state.listaTareas];
		copiaDeLista.splice(key, 1);

		setState({
			...state,
			listaTareas: copiaDeLista
		});
	};

	return (
		<div className="margen">
			{state.mensaje}
			<br />
			<input
				value={state.tarea}
				onChange={handleInputChange}
			/>
			<button onClick={handleClick}>
				+
			</button>

			<ul>
				{state.listaTareas.map((trea, key) => (
					<li key={key}>
						<Tarea
							tarea={trea}
							borrarTarea={() => borrarTarea(key)}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
