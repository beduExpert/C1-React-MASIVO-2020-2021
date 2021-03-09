import React from 'react';
import Grid from '@material-ui/core/Grid';

const Fotos = () => {
	return (
		<Grid container spacing={3}>
			{[1, 2, 3, 4].map(() => (
				<Grid item lg={3} sm={6} xs={12}>
					<div className="foto">
						Soy una foto
					</div>
				</Grid>
			))}
		</Grid>
	);
};

export default Fotos;
