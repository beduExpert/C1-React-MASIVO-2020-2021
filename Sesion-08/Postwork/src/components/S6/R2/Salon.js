import React from 'react';
import { useParams } from 'react-router-dom';

const Salon = () => {
	const { salon } = useParams();

	return (
		<div>
			<b>Salón: </b>
			{salon}
		</div>
	);
};

export default Salon;
