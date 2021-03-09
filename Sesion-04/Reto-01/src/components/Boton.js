import React from 'react';
import PropTypes from 'prop-types';

const Boton = (props) => {
	return (
		<button className="boton" onClick={props.handleClick}>
			{props.texto}
		</button>
	);
};

Boton.propTypes = {
   texto: PropTypes.string.isRequired,
   handleClick: PropTypes.func.isRequired
}

export default Boton;
