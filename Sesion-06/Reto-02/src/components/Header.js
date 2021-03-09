import React from 'react';
import { Link } from 'react-router-dom';
import { RUTAS } from '../helpers/constants';

const Header = () => {
	return (
		<div>
			<Link to={RUTAS.inicio}>
				Inicio
			</Link>
			-
			<Link to={RUTAS.instrucciones}>
				Instrucciones
			</Link>
		</div>
	);
};

export default Header;
