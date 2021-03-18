[`React Fundamentals`](../../README.md) > [`Sesión 04: Hooks y useState`](../Readme.md) > `Ejemplo 1`

## Usando hooks

### OBJETIVO
- De componente stateful (clase) a hook.

#### REQUISITOS 
- Tener Node instalado.

#### DESARROLLO

1. Vamos a rehacer componentes anteriores [Reto-02](../../Sesion-03/Reto-02) de la Sesion-03 pero ahora usando hooks.

3. Seguir las [buenas prácticas para empezar un proyecto](../../BuenasPracticas/EmpezandoProyectos/Readme.md).

3. El componente `Form.js` será un componente stateless (funcional).
```
import React from 'react';
import PropTypes from 'prop-types';
import '../css/form.css';

function Form(props) {
  // state = { value: '' }
  const [value, setValue] = React.useState('');

  const handleChange = (e) => {
    // this.setState({ value: e.target.value });
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // this.props.addTaskFn(this.state.value);
    props.addTaskFn(value);

    // this.setState({ value: '' });
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit} >
      <input 
        type='text'
        className='input'
        onChange={handleChange}
        placeholder='Agrega una tarea'
        value={value}
      />
      <button className='button'>Enviar</button>
    </form>
  )
};

Form.propTypes = {
  addTaskFn: PropTypes.func.isRequired
}

export default Form;
```

-------

[`Siguiente: Ejemplo-01`](../Ejemplo-01)
