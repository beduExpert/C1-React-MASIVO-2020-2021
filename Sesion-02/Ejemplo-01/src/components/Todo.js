import React from 'react';
import '../css/Todo.css';

class Todo extends React.Component {
  state = {
    done: true,
  }

  render () {
    return (
      <div className={`list-item ${this.state.done ? 'done' : ''}`}>
        Tarea
        <button className="delete is-pulled-right" />
      </div>
    )
  }
}

export default Todo;
