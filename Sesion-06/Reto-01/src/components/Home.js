import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';

function Home(props) {
  return (
    <>
      <Header
        counter={props.filtered.length}
        show={props.show}
        toggleDone={props.setShow}
      />
      <TodoList 
        tasks={props.filtered}
        toggleFn={props.handleClickToggleDone}
        deleteFn={props.handleClickDelete}
      />
      <Form addTaskFn={props.addTask} />
    </>
  )
};

Home.propTypes = {
  filtered: PropTypes.array.isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  handleClickToggleDone: PropTypes.func.isRequired,
  handleClickDelete: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
}

export default Home;
