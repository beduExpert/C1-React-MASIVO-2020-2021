import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  cursor: 'pointer',
  marginRight: '10px',
};

const opaque = {
  opacity: '.25',
};

const textLineThrough = {
  textDecoration: 'line-through',
};

function Todo(props) {
  const history = useHistory();
  const handleClick = () => history.push(`/details/${props.id}`);

  return (
    <ListItem>
      <CheckIcon 
        onClick={props.toggleFn}
        color={props.done ? "action" : "primary"}
        style={props.done ? {...styles, ...opaque} : styles}
      />
      <DeleteIcon
        style={props.done ? {...styles, ...opaque} : styles}
        color="secondary"
        onClick={e => props.deleteFn(e)}
      />
      <span
        onClick={handleClick}
        style={props.done ? {...styles, ...textLineThrough} : styles}
        >
        {props.title}
      </span>
    </ListItem>
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
