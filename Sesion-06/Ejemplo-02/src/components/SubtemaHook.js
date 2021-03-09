import React from 'react';
import { useParams } from 'react-router-dom';

const SubtemaHook = () => {
	const { subtema } = useParams();

	return (
		<p>
			{subtema}
		</p>
	);
};

export default SubtemaHook;
