import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import '../css/TodoList.css';

function TodoList(props) {
  return (
    <div className="list-wrapper">
      {
        props.tasks.map((e, i) => 
          <Todo
            key={i}
            done={e.done}
            title={e.title} 
            deleteFn={ev => props.deleteFn(ev, e.title)}
            toggleFn={ev => props.toggleFn(ev, e.title)}
          />
        )
      }
    </div>
  )
};

TodoList.propTypes = {
  tasks: PropTypes.array,
  deleteFn: PropTypes.func.isRequired,
  toggleFn: PropTypes.func.isRequired
}

TodoList.defaultProps = {
  tasks: []
}

export default TodoList;
