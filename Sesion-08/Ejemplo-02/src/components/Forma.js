import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Forma = () => {
	const [nombre, setNombre] = React.useState('');
	const [edad, setEdad] = React.useState('');
	const [empresa, setEmpresa] = React.useState('');
	const [ocupacion, setOcupacion] = React.useState('');

	const handleBuscar = () => {
		if (!nombre || !edad || !empresa || !ocupacion) return;

		setTimeout(() => {
			alert('Si se encuentra.');
		}, 1000);
	};

	return (
		<Grid container spacing={3}>
			<Grid item xs={12} sm={6} md={3}>
				<TextField
					label="Nombre"
					fullWidth
					value={nombre}
					onChange={(e) => setNombre(e.target.value)}
					required
					error={!nombre}
				/>
			</Grid>

			<Grid item xs={12} sm={6} md={3}>
				<TextField
					label="Edad"
					type="number"
					fullWidth
					value={edad}
					onChange={(e) => setEdad(e.target.value)}
					required
					error={!edad}
				/>
			</Grid>

			<Grid item xs={12} sm={6} md={3}>
				<TextField
					label="Empresa"
					fullWidth
					value={empresa}
					onChange={(e) => setEmpresa(e.target.value)}
					required
					error={!empresa}
				/>
			</Grid>

			<Grid item xs={12} sm={6} md={3}>
				<TextField
					label="Ocupación"
					fullWidth
					value={ocupacion}
					onChange={(e) => setOcupacion(e.target.value)}
					required
					error={!ocupacion}
				/>
			</Grid>

			<Grid item xs={12} align="center">
				<Button variant="contained" onClick={handleBuscar}>
					Buscar
				</Button>
			</Grid>
		</Grid>
	);
};

export default Forma;
