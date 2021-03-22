import React from 'react';
import PropTypes from 'prop-types';
import '../css/form.css';

class Form extends React.Component {
  state = { value: '' }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addTaskFn(this.state.value);

    this.setState({ value: '' });
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} >
        <input 
          type='text'
          className='input'
          onChange={this.handleChange}
          placeholder='Agrega una tarea'
          value={this.state.value}
        />
        <button className='button'>Enviar</button>
      </form>
    )
  };
}

Form.propTypes = {
  addTaskFn: PropTypes.func.isRequired
}

export default Form;
