import React from 'react';
import PropTypes from 'prop-types';

function TodoDetails(props) {
  const [todo, setTodo] = React.useState({ title: "", details: [] });
  const id = props.match.params.id;

  React.useEffect(function() {
    const getData = async () => {
      try {
        const response = await fetch(`${props.url}/${id}`);
        const t = await response.json();

        setTodo(t);
      } catch(e) {
        console.error(e);
      }
    };

    getData();
  }, [id, props.url]);

  return (
    <>
    <div className="card-header">
      <h1 className="card-header-title header">
        {todo.title}
      </h1 >
    </div>
    <div className="list-wrapper">
      {
        todo.details.map((detail, i) => 
          <div key={i} className="list-item">
            { detail }
          </div>
        )
      }
    </div>
    </>
  )
}

TodoDetails.propTypes = {
  url: PropTypes.string.isRequired
};

export default TodoDetails;
