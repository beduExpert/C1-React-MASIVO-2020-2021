import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import PlanReact from './PlanReact';
import PlanRedux from './PlanRedux';
import SubtemaHook from './SubtemaHook';
import SubtemaViejo from './SubtemaViejo';
import { RUTAS } from '../helpers/constants';

const App = () => {
	return (
		<BrowserRouter>
			<div className="margen">
				<Header />

				<Route path={RUTAS.planReact} component={PlanReact} />
				<Route exact path={`${RUTAS.planReact}/:subtema`} component={SubtemaViejo} />

				<Route path={RUTAS.planRedux} component={PlanRedux} />
				<Route exact path={`${RUTAS.planRedux}/:subtema`} component={SubtemaHook} />
			</div>
		</BrowserRouter>
	);
};

export default App;
