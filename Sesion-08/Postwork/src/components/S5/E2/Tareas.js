import React from 'react';

const Tareas = () => {
	const [tareas, setTareas] = React.useState([]);

	const didMount = () => {
		setTimeout(
			() => setTareas(['Leer', 'Preguntar', 'Practicar']),
			1000
		);
	};
	React.useEffect(didMount, []);

	return (
		<div>
			{!tareas.length && '...'}
			{!!tareas.length && tareas.map((trea) => `${trea} - `)}
			{/* !!algo - convierte ese algo a booleano (true, false) */}
		</div>
	);
};

export default Tareas;
