import React from 'react';
import PropTypes from 'prop-types';
import '../css/ShowHide.css';

function ShowHide(props) {
  return (
    <div className="icon-wrapper" onClick={e => props.toggleDone(!props.show)}>
      <i className={props.show ? 'gg-block' : 'gg-unblock'} />
    </div>
  )
}

ShowHide.propTypes = {
  toggleDone: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
}

export default ShowHide;
