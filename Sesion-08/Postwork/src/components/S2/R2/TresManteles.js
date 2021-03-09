import React from 'react';
import Mantel from './Mantel';

const TresManteles = () => {
	return (
		<div className="width100 spaceAround">
			<Mantel backgroundColor="green" height={100} />
			<Mantel />
			<Mantel backgroundColor="purple" height={75} />
		</div>
	);
};

export default TresManteles;
