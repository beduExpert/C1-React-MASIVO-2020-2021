import React from 'react';
import '../css/form.css';

function Form() {
  return (
    <form>
      <input 
        type='text'
        className='input'
        placeholder='Agrega una tarea'
      />
      <button className='button'>Enviar</button>
    </form>
  )
};

export default Form;
