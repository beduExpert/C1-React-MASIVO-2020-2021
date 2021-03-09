import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<Link to="/">
				Cabeza
			</Link>
			-
			<Link to="/cuerpo">
				Cuerpo
			</Link>
			-
			<Link to="/juntos">
				Juntos
			</Link>
		</div>
	);
};

export default Header;
