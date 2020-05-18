import React from 'react';
import { Link } from 'react-router-dom';
import ExampleImage from '../images/Example.jpg';

const Another = () => {
  return (
    <div>
      <p>This is the other page</p>
      <img src={ExampleImage} alt='Bilde' height={300} /> <br />
      <Link to='/'>Go back</Link>
    </div>
  );
};

export default Another;
