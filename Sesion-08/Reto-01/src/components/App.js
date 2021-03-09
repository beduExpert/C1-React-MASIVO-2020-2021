import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Fotos from './Fotos';
import Parrafos from './Parrafos';
import Opiniones from './Opiniones';

const App = () => {
	return (
		<Container>
			<Grid container>

				<Grid item xs={12} align="center">
					<h1>
						Un título corto y pegajoso
					</h1>
				</Grid>

				<Grid item xs={12}>
					<Fotos />
				</Grid>

				<Grid item xs={12}>
					<Parrafos />
				</Grid>

				<Grid item xs={12}>
					<h2>
						Opiniones
					</h2>
				</Grid>

				<Grid item xs={12}>
					<Opiniones />
				</Grid>

			</Grid>
		</Container>
	);
};

export default App;
