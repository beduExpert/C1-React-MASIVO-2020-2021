import React from 'react';
import PropTypes from 'prop-types';
import '../css/Checkmark.css';

// original: http://jsfiddle.net/awayF/490/
function Checkmark(props) {
  return (
    <span 
      className={`checkmark ${props.done ? 'dimmed': ''}`}
      onClick={props.toggleFn}
    >
      <div className="checkmark_stem"/>
      <div className="checkmark_kick"/>
    </span>
  )
};

Checkmark.propTypes = {
  done: PropTypes.bool,
  toggleFn: PropTypes.func.isRequired
}

export default Checkmark
