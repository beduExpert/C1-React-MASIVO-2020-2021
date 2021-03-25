import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Todo from './Todo';

function TodoList(props) {
  return (
    <List>
      {
        props.tasks.map(e => 
          <Todo
            key={e.id}
            id={e.id}
            done={e.done}
            title={e.title} 
            deleteFn={ev => props.deleteFn(ev, e.title)}
            toggleFn={ev => props.toggleFn(ev, e.title)}
          />
        )
      }
    </List>
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
