import React from 'react';

const LuzMercurial = () => {
	const [color, setColor] = React.useState('pink');

	return (
		<div
			className="luzMercurial"
			style={{ backgroundColor: color }}
		/>
	);
};

export default LuzMercurial;
