import React from 'react';
import PropTypes from 'prop-types';

class Nombre extends React.Component {
	componentDidMount() {
		alert('Te damos la bienvenida ' + this.props.nombre);
	}

	componentWillUnmount() {
		alert('Adiós');
	}

	render() {
		return (
			<div>
				{this.props.nombre}
				<button onClick={this.props.borrarNombreDeLista}>
					X
				</button>
			</div>
		);
	}
};

Nombre.propTypes = {
	nombre: PropTypes.string.isRequired,
	borrarNombreDeLista: PropTypes.func.isRequired
}

export default Nombre;
