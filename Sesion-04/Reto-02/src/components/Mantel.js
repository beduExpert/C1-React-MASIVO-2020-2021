import React from 'react';
import Plato from './Plato';
import Cubierto from './Cubierto';

const Mantel = () => {
	const [height, setHeight] = React.useState(120);
	const [backgroundColor, setBackgroundColor] = React.useState('darksalmon');

	return (
		<div
			className="mantel spaceAround"
			style={{ height, backgroundColor }}
		>
			<Cubierto />
			<Plato />
			<Cubierto />
		</div>
	);
};

export default Mantel;