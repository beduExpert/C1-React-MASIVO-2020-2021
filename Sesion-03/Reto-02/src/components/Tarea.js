import React from 'react';
import PropTypes from 'prop-types';

const Tarea = (props) => {
	return (
		<div>
			{props.tarea}
			<button onClick={props.borrarTarea}>
				X
			</button>
		</div>
	);
};

Tarea.propTypes = {
	tarea: PropTypes.string.isRequired,
	borrarTarea: PropTypes.func.isRequired
}

export default Tarea;
