import React from 'react';
import PropTypes from 'prop-types';

const Cubierto = (props) => {
	return (
		<div
			className="cubierto"
			style={{
				backgroundColor: props.colorCubierto
			}}
		/>
	);
};

Cubierto.propTypes = {
	colorCubierto: PropTypes.string
}

export default Cubierto;