import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: theme.spacing(3)
	},
	title: {
		textAlign: 'center',
		flexGrow: 1
	}
}));

const Header = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						Módulo React
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
