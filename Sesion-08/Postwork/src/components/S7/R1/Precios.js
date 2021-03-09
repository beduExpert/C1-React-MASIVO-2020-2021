import React from 'react';
import { setIn } from 'immutable';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RUTAS } from '../helpers/constants';

const Precios = (props) => {
	const handlePrecio = (atributo) => (event) => {
		const estadoInmutado = setIn(
			props.estadoGlobal,
			['precios', atributo],
			event.target.value
		);
		props.setEstadoGlobal(estadoInmutado);
	};

	return (
		<div>
			Pan1:
			<input
				type="number"
				value={props.estadoGlobal.precios.pan1}
				onChange={handlePrecio('pan1')}
			/>
			<br /><br />

			Lechuga:
			<input
				type="number"
				value={props.estadoGlobal.precios.lechuga}
				onChange={handlePrecio('lechuga')}
			/>
			<br /><br />

			Queso:
			<input
				type="number"
				value={props.estadoGlobal.precios.queso}
				onChange={handlePrecio('queso')}
			/>
			<br /><br />

			Carne:
			<input
				type="number"
				value={props.estadoGlobal.precios.carne}
				onChange={handlePrecio('carne')}
			/>
			<br /><br />

			Pan2:
			<input
				type="number"
				value={props.estadoGlobal.precios.pan2}
				onChange={handlePrecio('pan2')}
			/>
			<br /><br />

			<Link to={RUTAS.cotizador}>
				<button>Cotizar</button>
			</Link>
		</div>
	);
};

Precios.propTypes = {
	setEstadoGlobal: PropTypes.func.isRequired,
	estadoGlobal: PropTypes.shape({
		hamburguesas: PropTypes.array.isRequired,
		precios: PropTypes.shape({
			pan1: PropTypes.string.isRequired,
			lechuga: PropTypes.string.isRequired,
			queso: PropTypes.string.isRequired,
			carne: PropTypes.string.isRequired,
			pan2: PropTypes.string.isRequired
		})
	})
};

export default Precios;
