import React from 'react';
import Tareas from './Tareas';
import Profes from './Profes';
import Usuarios from './Usuarios';

const App = () => {
	const [mostrarTareas, setMostrarTareas] = React.useState(false);
	const [mostrarProfes, setMostrarProfes] = React.useState(false);
	const [mostrarUsuarios, setMostrarUsuarios] = React.useState(false);

	const renderizarUsuarios = () => {
		if (mostrarUsuarios) {
			return <Usuarios />;
		}
	};

	return (
		<div className="margen">
			<button onClick={() => setMostrarTareas(!mostrarTareas)}>
				Tareas
			</button>
			<br />
			{mostrarTareas && <Tareas />}
			<br /><br />

			<button onClick={() => setMostrarProfes(!mostrarProfes)}>
				Profes
			</button>
			<br />
			{mostrarProfes ? <Profes /> : ''}
			<br /><br />

			<button onClick={() => setMostrarUsuarios(!mostrarUsuarios)}>
				Usuarios
			</button>
			<br />
			{renderizarUsuarios()}
			<br /><br />
		</div>
	);
};

export default App;
