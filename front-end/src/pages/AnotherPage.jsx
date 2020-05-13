import React from 'react';
import { Link } from 'react-router-dom';

const Another = () => {
  return (
    <div>
      <p>This is the other page</p>
      <Link to='/'>Go back</Link>
    </div>
  );
};

export default Another;
