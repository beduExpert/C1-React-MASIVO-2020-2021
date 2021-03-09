import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
	select: {
		minWidth: 120,
		marginBottom: theme.spacing(3)
	}
}));

const Seleccion = () => {
	const classes = useStyles();
	const [numSesion, setNumSesion] = React.useState('1');
	const [selectValue, setSelectValue] = React.useState('s1e1');
	let history = useHistory();
	const { pathname } = useLocation();

	const didMount = () => {
		if (pathname === '/') return;
		handleSelect({ target: { value: pathname.substring(1) } });
	};
	React.useEffect(didMount, []);

	const handleSelect = (event) => {
		const value = event.target.value;
		if (!value) return;
		setSelectValue(value);
		setNumSesion(value[1]);
		history.push('/' + value);
	};

	return (
		<div>
			Sesión {numSesion} -&nbsp;
			<Select value={selectValue} className={classes.select} onChange={handleSelect}>
				<ListSubheader>S1: Fundamentos de React</ListSubheader>
				<MenuItem value="s1e1">E1: Techo del cielo</MenuItem>
				<MenuItem value="s1e2">E2: Luz Mercurial</MenuItem>
				<MenuItem value="s1r1">R1: ¡A comer!</MenuItem>
				<MenuItem value="s1r2">R2: ¡Yo me lo llevo!</MenuItem>
				<MenuItem value="s1post">Postwork</MenuItem>

				<ListSubheader>S2: State y Props</ListSubheader>
				<MenuItem value="s2e1">E1: Patricio</MenuItem>
				<MenuItem value="s2e2">E2: Gracias Abuelo</MenuItem>
				<MenuItem value="s2r1">R1: Tía Socorro ganó</MenuItem>
				<MenuItem value="s2r2">R2: Cada quien su mantel</MenuItem>
				<MenuItem value="s2post">Postwork</MenuItem>

				<ListSubheader>S3: Ciclo de vida, setState y eventos</ListSubheader>
				<MenuItem value="s3e1">E1: Incremento</MenuItem>
				<MenuItem value="s3e2">E2: Complejidad, bienvenida</MenuItem>
				<MenuItem value="s3r1">R1: Incremento y decremento</MenuItem>
				<MenuItem value="s3r2">R2: Ciclos de vida viejos</MenuItem>

				<ListSubheader>S4: Hooks y useState</ListSubheader>
				<MenuItem value="s4e1">E1: Incrementando de nuevo</MenuItem>
				<MenuItem value="s4e2">E2: Patricio evoluciona</MenuItem>
				<MenuItem value="s4e3">E3: Escuela</MenuItem>
				<MenuItem value="s4r1">R1: 3 botones</MenuItem>
				<MenuItem value="s4r2">R2: ¡Pero quiere otro!</MenuItem>
				<MenuItem value="s4r3">R3: ¿Cómo te llamas?</MenuItem>

				<ListSubheader>S5: Hooks y useEffect</ListSubheader>
				<MenuItem value="s5e1">E1: Capitán Garfio</MenuItem>
				<MenuItem value="s5e2">E2: Simulando llamadas condicionales</MenuItem>
				<MenuItem value="s5r1">R1: Extraño la tarea</MenuItem>
				<MenuItem value="s5r2">R2: ¿Niño o niña?</MenuItem>
				<MenuItem value="s5post">Postwork</MenuItem>

				<ListSubheader>S6: Rutas con react router dom</ListSubheader>
				<MenuItem value="s6e1">E1: Anatomía</MenuItem>
				<MenuItem value="s6e2">E2: Plan de estudios</MenuItem>
				<MenuItem value="s6r1">R1: Palmera</MenuItem>
				<MenuItem value="s6r2">R2: Buscando a Memo</MenuItem>

				<ListSubheader>S7: Progressive web apps (PWA)</ListSubheader>
				<MenuItem value="s7e1">E1: ¡Wooow!</MenuItem>
				<MenuItem value="s7r1">R1: ¿Hamburguesas o qué?</MenuItem>

				<ListSubheader>S8: Material UI</ListSubheader>
				<MenuItem value="s8e1">E1: App responsiva</MenuItem>
				<MenuItem value="s8e2">E2: Forma</MenuItem>
				<MenuItem value="s8r1">R1: Periódico</MenuItem>
				<MenuItem value="s8r2">R2: Una mejor Forma</MenuItem>
				<MenuItem value="s8post">Postwork</MenuItem>
			</Select>
			<hr />
			<br />
		</div>
	);
};

export default Seleccion;
