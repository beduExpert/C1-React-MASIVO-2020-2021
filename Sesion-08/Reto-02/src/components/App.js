import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Forma from './Forma';

const App = () => {
	return (
		<div>
			<Header />
			<Container>
				<Forma />
			</Container>
		</div>
	);
};

export default App;
