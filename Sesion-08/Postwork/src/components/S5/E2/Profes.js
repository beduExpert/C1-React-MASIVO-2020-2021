import React from 'react';

const Profes = () => {
	const [profes, setProfes] = React.useState([]);

	const didMount = () => {
		setTimeout(
			() => setProfes(['Profe 1', 'P2', 'Super Profe']),
			1000
		);
	};
	React.useEffect(didMount, []);

	return (
		<div>
			{
				profes.length
					? profes.map((prf) => `${prf} - `)
					: '...'
			}
		</div>
	);
};

export default Profes;
