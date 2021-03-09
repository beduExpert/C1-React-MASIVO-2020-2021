import React from 'react';
import PropTypes from 'prop-types';

const Nombre = (props) => {
	const didMount = () => {
	   console.log('Te damos la bienvenida ' + props.nombre);
	};
	React.useEffect(didMount, []);

	const willUnmount = () => {
	   return () => {
	      console.log('Adiós');
	   }
	};
	React.useEffect(willUnmount, []);

	return (
		<div>
			{props.nombre}
			<button onClick={props.borrarNombreDeLista}>
				X
			</button>
		</div>
	);
};

Nombre.propTypes = {
	nombre: PropTypes.string.isRequired,
	borrarNombreDeLista: PropTypes.func.isRequired
}

export default Nombre;
