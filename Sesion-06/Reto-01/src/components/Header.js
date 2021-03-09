import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<Link to="/">
				Inicio
			</Link>
			-
			<Link to="/hojas">
				Hojas
			</Link>
			-
			<Link to="/cocos">
				Cocos
			</Link>
			-
			<Link to="/tronco">
				Tronco
			</Link>
			-
			<Link to="/palmera">
				Palmera
			</Link>
		</div>
	);
};

export default Header;
