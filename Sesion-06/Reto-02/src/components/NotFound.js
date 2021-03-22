import React from 'react';
import { Link } from 'react-router-dom';

function NotFound () {
  return (
    <div>
      <h1>404 - Not Found!</h1>
      <Link to="/">
        Ir a la Raíz
      </Link>
    </div>
  );
}

export default NotFound;
