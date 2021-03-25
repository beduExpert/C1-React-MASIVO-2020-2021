import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

function Header(props) {
  return (
    <AppBar color="primary" align="center">
      <Typography variant="h6">
        Hay {props.counter} tareas
      </Typography>
      <FormControlLabel
        control={
          <Switch
            checked={props.show}
            onChange={e => props.toggleDone(!props.show)}
            name="checkedB"
            color="secondary"
          />
        }
        label={props.show ? "Todas" : "Por hacer"}
      />
    </AppBar>
  )
};

Header.propTypes = {
  counter: PropTypes.number,
  toggleDone: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
}

Header.defaultProps = {
  counter: 0
}

export default Header;
