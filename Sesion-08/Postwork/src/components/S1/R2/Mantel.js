import React from 'react';
import Plato from './Plato';
import Cubierto from './Cubierto';

const Mantel = () => {
	return (
		<div className="mantel spaceAround">
			<Cubierto />
			<Plato />
			<Cubierto />
		</div>
	);
};

export default Mantel;