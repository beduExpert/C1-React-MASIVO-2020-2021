import React from 'react';
import { Link } from 'react-router-dom';
import { RUTAS } from '../helpers/constants';

const Buscador = () => {
	const [escuela, setEscuela] = React.useState('');
	const [salon, setSalon] = React.useState('');
	const [nombre, setNombre] = React.useState('');

	const construirEnlace = () => {
		let enlace = RUTAS.resultado;

		if (!escuela) return enlace; // Si no hay escuela, solo el enlace

		enlace += `/${escuela}`; // Añadir la escuela

		if (!salon) return enlace; // Si no hay salon, solo la escuela

		enlace += `/${salon}`; // Añadir el salon

		if (!nombre) return enlace; // Si no hay nombre, solo escuela y salon

		enlace += `/${nombre}`; // Añadir el nombre

		return enlace; // Completo
	};

	return (
		<div>
			<br />
			Escuela:
			<input
				onChange={(evt) => setEscuela(evt.target.value)}
			/>
			<br />

			Salón:
			<input
				disabled={!escuela}
				onChange={(evt) => setSalon(evt.target.value)}
			/>
			<br />

			Nombre:
			<input
				disabled={!escuela || !salon}
				onChange={(evt) => setNombre(evt.target.value)}
			/>
			<br /><br />

			<Link to={construirEnlace()}>
				<button>Buscar</button>
			</Link>
		</div>
	);
};

export default Buscador;
