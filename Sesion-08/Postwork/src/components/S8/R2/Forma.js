import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Resultado from './Resultado';

const Forma = () => {
	const [nombre, setNombre] = React.useState('');
	const [edad, setEdad] = React.useState('');
	const [empresa, setEmpresa] = React.useState('');
	const [ocupacion, setOcupacion] = React.useState('');
	const [cargando, setCargando] = React.useState(false);
	const [dialogAbierto, setDialogAbierto] = React.useState(false);

	const inputsNotFilled = !nombre || !edad || !empresa || !ocupacion;

	const handleBuscar = () => {
		if (inputsNotFilled) return;

		setCargando(true);
		setTimeout(() => {
			setDialogAbierto(true);
			setCargando(false);
		}, 1000);
	};

	const cerrarDialog = () => {
		setNombre('');
		setEdad('');
		setEmpresa('');
		setOcupacion('');
		setDialogAbierto(false);
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
				{cargando ? (
					<CircularProgress />
				) : (
					<Button
						variant="contained"
						disabled={inputsNotFilled}
						onClick={handleBuscar}
					>
						Buscar
					</Button>
				)}
			</Grid>

			<Resultado dialogAbierto={dialogAbierto} cerrarDialog={cerrarDialog} />
		</Grid>
	);
};

export default Forma;
