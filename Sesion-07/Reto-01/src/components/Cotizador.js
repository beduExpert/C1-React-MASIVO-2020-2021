import React from 'react';
import { setIn } from 'immutable';
import PropTypes from 'prop-types';
import BurgerInfo from './BurgerInfo';
import { calcularBurger } from '../helpers/constants';

const Cotizador = (props) => {
	const { estadoGlobal, setEstadoGlobal } = props;
	const [nombre, setNombre] = React.useState('');
	const [granTotal, setGranTotal] = React.useState('');

	const hamburguesasLifecycle = () => {
		const { hamburguesas, precios } = estadoGlobal;

		let acum = 0;
		hamburguesas.forEach((burger) => {
			const totalBurger = calcularBurger(burger, precios);
			acum += totalBurger;
		});

		setGranTotal(acum);
	};
	React.useEffect(hamburguesasLifecycle, [estadoGlobal.hamburguesas]);

	const agregarPedido = () => {
		if (!nombre) return;
		setNombre('');

		const burgerNueva = {
			nombre,
			pan1: 1,
			lechuga: 0,
			queso: 0,
			carne: 0,
			pan2: 1
		};

		const burgersActualizadas = [
			...estadoGlobal.hamburguesas,
			burgerNueva
		];

		const estadoInmutado = setIn(
			estadoGlobal,
			['hamburguesas'],
			burgersActualizadas
		);
		setEstadoGlobal(estadoInmutado);
	};

	return (
		<div>
			<h2>
				TOTAL: {granTotal}
			</h2>

			Hamburguesa para:
			<input value={nombre} onChange={(e) => setNombre(e.target.value)} />
			<button onClick={agregarPedido}>
				Agregar
			</button>

			<br /><br /><hr /><br />

			{estadoGlobal.hamburguesas.map((burger, casilla) => (
				<BurgerInfo
					key={casilla}
					burger={burger}
					casilla={casilla}
					estadoGlobal={estadoGlobal}
					precios={estadoGlobal.precios}
					setEstadoGlobal={setEstadoGlobal}
				/>
			))}
		</div>
	);
};

Cotizador.propTypes = {
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

export default Cotizador;
