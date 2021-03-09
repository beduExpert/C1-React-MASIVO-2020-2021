import React from 'react';
import { useParams } from 'react-router-dom';

const Nombre = () => {
	const { nombre } = useParams();

	const nombreLifecycle = () => {
		if (nombre.toLowerCase() === 'memo') {
			alert('¡Es Memo!');
		}
	};
	React.useEffect(nombreLifecycle, [nombre])

	return (
		<div>
			<b>Nombre: </b>
			{nombre}
		</div>
	);
};

export default Nombre;
