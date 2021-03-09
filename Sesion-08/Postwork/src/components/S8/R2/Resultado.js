import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const Resultado = (props) => {
	return (
		<Dialog open={props.dialogAbierto} onClose={props.cerrarDialog}>
			<DialogContent>
				<DialogContentText>Si se encuentra.</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button color="primary" onClick={props.cerrarDialog}>
					Cerrar
				</Button>
			</DialogActions>
		</Dialog>
	);
};

Resultado.propTypes = {
	dialogAbierto: PropTypes.bool.isRequired,
	cerrarDialog: PropTypes.func.isRequired
};

export default Resultado;
