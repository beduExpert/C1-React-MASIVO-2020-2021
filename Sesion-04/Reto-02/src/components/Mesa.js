import React from 'react';
import DosManteles from './DosManteles';
import TresManteles from './TresManteles';
import FilaCentral from './FilaCentral';

const Mesa = () => {
	return (
		<div id="mesa" className="spaceAround">
			<TresManteles />
			<FilaCentral />
			<DosManteles />
		</div>
	);
};

export default Mesa;