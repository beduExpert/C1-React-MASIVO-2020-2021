import React from 'react';
import { Link } from 'react-router-dom';
import { RUTAS2 } from '../helpers/constants';

const Header = () => {
	return (
		<div>
			<Link to={RUTAS2.inicio}>
				Inicio
			</Link>
			-
			<Link to={RUTAS2.instrucciones}>
				Instrucciones
			</Link>
		</div>
	);
};

export default Header;
