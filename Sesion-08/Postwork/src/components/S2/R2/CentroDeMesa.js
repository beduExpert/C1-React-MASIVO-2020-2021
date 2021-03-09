import React from 'react';
import Oro from './Oro';

const CentroDeMesa = () => {
	return (
		<div className="centroDeMesa">
			<div className="width100 spaceAround">
				<Oro />
			</div>
			<div className="width70 spaceAround paddingX">
				<Oro />
				<Oro />
			</div>
		</div>
	);
};

export default CentroDeMesa;
