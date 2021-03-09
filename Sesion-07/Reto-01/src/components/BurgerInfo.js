import React from 'react';
import { setIn } from 'immutable';
import PropTypes from 'prop-types';
import { calcularBurger } from '../helpers/constants';

const BurgerInfo = (props) => {
	const [total, setTotal] = React.useState('');

	const burgerLifecycle = () => {
		const totalBurger = calcularBurger(props.burger, props.precios)
		setTotal(totalBurger);
	};
	React.useEffect(burgerLifecycle, [props.burger]);

	const handleCantidad = (ingrediente, operacion) => () => {
		const cantidad = props.burger[ingrediente];

		let nuevaCantidad = operacion === 'sumar'
			? cantidad + 1
			: cantidad - 1;

		if (nuevaCantidad < 0) nuevaCantidad = 0;

		const estadoInmutado = setIn(
			props.estadoGlobal,
			['hamburguesas', props.casilla, ingrediente],
			nuevaCantidad
		);

		props.setEstadoGlobal(estadoInmutado);
	};

	return (
		<div>
			Pedido para <b>{props.burger.nombre}</b>:
			<br /><br />

			Lechuga: {props.burger.lechuga}
			<button onClick={handleCantidad('lechuga', 'sumar')}>
				+
			</button>
			<button onClick={handleCantidad('lechuga', 'restar')}>
				-
			</button>
			<br /><br />

			Queso: {props.burger.queso}
			<button onClick={handleCantidad('queso', 'sumar')}>
				+
			</button>
			<button onClick={handleCantidad('queso', 'restar')}>
				-
			</button>
			<br /><br />

			Carne: {props.burger.carne}
			<button onClick={handleCantidad('carne', 'sumar')}>
				+
			</button>
			<button onClick={handleCantidad('carne', 'restar')}>
				-
			</button>
			<br /><br />

			Total: {total}

			<br /><br /><br /><br />
		</div>
	);
};

BurgerInfo.propTypes = {
	casilla: PropTypes.number.isRequired,
	estadoGlobal: PropTypes.object.isRequired,
	setEstadoGlobal: PropTypes.func.isRequired,
	precios: PropTypes.shape({
		pan1: PropTypes.string.isRequired,
		lechuga: PropTypes.string.isRequired,
		queso: PropTypes.string.isRequired,
		carne: PropTypes.string.isRequired,
		pan2: PropTypes.string.isRequired
	}),
	burger: PropTypes.shape({
		lechuga: PropTypes.number,
		queso: PropTypes.number,
		carne: PropTypes.number,
		pan1: PropTypes.number.isRequired,
		pan2: PropTypes.number.isRequired,
		nombre: PropTypes.string.isRequired,
	})
};

export default BurgerInfo;
