import React from 'react';
import Grid from '@material-ui/core/Grid';

const Opiniones = () => {
	return (
		<Grid container spacing={3}>
			{[1, 2, 3, 4, 5, 6].map(() => (
				<Grid item lg={2} md={3} sm={4} xs={6}>
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
				</Grid>
			))}
		</Grid>
	);
};

export default Opiniones;
