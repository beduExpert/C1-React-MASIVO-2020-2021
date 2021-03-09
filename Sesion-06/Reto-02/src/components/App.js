import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Salon from './Salon';
import Header from './Header';
import Nombre from './Nombre';
import Escuela from './Escuela';
import Buscador from './Buscador';
import Instrucciones from './Instrucciones';
import { RUTAS } from '../helpers/constants';

const App = () => {
	return (
		<BrowserRouter>
			<div className="margen">
				<Header />

				<Route path={RUTAS.inicio} component={Buscador} />
				<Route exact path={RUTAS.instrucciones} component={Instrucciones} />

				<Route
					path={RUTAS.resultado + '/:escuela'}
					component={Escuela}
				/>
				<Route
					path={RUTAS.resultado + '/:escuela/:salon'}
					component={Salon}
				/>
				<Route
					path={RUTAS.resultado + '/:escuela/:salon/:nombre'}
					component={Nombre}
				/>
			</div>
		</BrowserRouter>
	);
};

export default App;
