import React from 'react';
import { Link } from 'react-router-dom';
import { RUTAS } from '../helpers/constants';

const Header = () => {
	return (
		<div className="header">
			<Link to={RUTAS.precios}>
				Precios
			</Link>
			-
			<Link to={RUTAS.cotizador}>
				Cotizar
			</Link>
			-
			<Link to={RUTAS.instrucciones}>
				Instrucciones
			</Link>
		</div>
	);
};

export default Header;
