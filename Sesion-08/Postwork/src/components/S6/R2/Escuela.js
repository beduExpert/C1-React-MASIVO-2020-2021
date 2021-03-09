import React from 'react';
import { useParams } from 'react-router-dom';

const Escuela = () => {
	const { escuela } = useParams();

	return (
		<div>
			<br /><hr /><br />
			<b>Escuela: </b>
			{escuela}
		</div>
	);
};

export default Escuela;
