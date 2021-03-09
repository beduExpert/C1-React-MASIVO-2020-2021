import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Hojas from './Hojas';
import Cocos from './Cocos';
import Tronco from './Tronco';

const App = () => {
	return (
		<BrowserRouter>
			<div className="margen">
				<Header />

				<Route exact path="/">
					¿Qué va a llevar?
				</Route>

				<Route exact path="/hojas" component={Hojas} />
				<Route exact path="/cocos" component={Cocos} />
				<Route exact path="/tronco" component={Tronco} />

				<Route exact path="/palmera">
					<Hojas />
					<Cocos />
					<Tronco />
				</Route>
			</div>
		</BrowserRouter>
	);
};

export default App;
