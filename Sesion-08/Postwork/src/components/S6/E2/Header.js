import React from 'react';
import { Link } from 'react-router-dom';
import { RUTAS1 } from '../helpers/constants';

const Header = () => {
	return (
		<div>
			<Link to={RUTAS1.inicio}>
				Inicio
			</Link>
			-
			<Link to={RUTAS1.planReact}>
				React
			</Link>
			-
			<Link to={RUTAS1.planRedux}>
				Redux
			</Link>
		</div>
	);
};

export default Header;
