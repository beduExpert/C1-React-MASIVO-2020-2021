import React from 'react';
import PropTypes from 'prop-types';
import '../css/Todo.css';

class Todo extends React.Component {
  render () {
    return (
      <div className={`list-item ${this.props.done ? 'done' : ''}`}>
        Tarea
        <button className="delete is-pulled-right" />
      </div>
    )
  }
}

Todo.propTypes = {
  done: PropTypes.bool,
}

export default Todo;
