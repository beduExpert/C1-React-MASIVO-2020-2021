import React from 'react';
import PropTypes from 'prop-types';
import ShowHide from './ShowHide';
import '../css/header.css';

function Header(props) {
  return (
    <div className="card-header">
      <h1 className="card-header-title header">
        Hay {props.counter} tareas
      </h1>
      <ShowHide show={props.show} toggleDone={props.toggleDone} />
    </div>
  )
};

Header.propTypes = {
  counter: PropTypes.number,
  toggleDone: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
}

Header.defaultProps = {
  counter: 0
}

export default Header;
