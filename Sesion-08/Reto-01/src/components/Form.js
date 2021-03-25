import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Form(props) {
  const [value, setValue] = React.useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addTaskFn(value);

    setValue('');
  }

  return (
    <form onSubmit={handleSubmit} >
      <TextField 
        id="standard-basic"
        label="Tarea a agregar"
        onChange={handleChange}
        value={value}
        fullWidth
      />
      <Button
        color="primary"
        type="submit"
        fullWidth
      >
        Enviar
      </Button>
    </form>
  )
};

Form.propTypes = {
  addTaskFn: PropTypes.func.isRequired
}

export default Form;
