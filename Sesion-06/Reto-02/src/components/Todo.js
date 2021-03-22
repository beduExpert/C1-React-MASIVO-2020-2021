import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import '../css/Todo.css';
import Checkmark from './Checkmark';

function Todo(props) {
  const history = useHistory();
  const handleClick = () => history.push(`/details/${props.id}`);

  return (
    <div className={`list-item ${props.done ? 'done' : ''}`}>
      <span onClick={handleClick}>
        {props.title}
      </span>
      <div className="is-pulled-right">
        <Checkmark 
          toggleFn={props.toggleFn}
          done={props.done}
        />
        <button 
          className="delete is-pulled-right"
          onClick={e => props.deleteFn(e)}
        />
      </div>
    </div>
  )
}

Todo.propTypes = {
  deleteFn: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  toggleFn: PropTypes.func.isRequired
}

export default Todo;
