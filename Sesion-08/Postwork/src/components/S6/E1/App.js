import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Cabeza from './Cabeza';
import Cuerpo from './Cuerpo';

const App = () => {
	return (
		<BrowserRouter>
			<div className="margen">
				<Header />

				<Route exact path="/" component={Cabeza} />
				<Route exact path="/cuerpo" component={Cuerpo} />
				<Route exact path="/juntos">
					<Cabeza />
					<Cuerpo />
				</Route>
			</div>
		</BrowserRouter>
	);
};

export default App;
