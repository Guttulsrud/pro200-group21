import React from 'react';
import Example from '../components/Example';
import Example2 from '../components/Example';
import { Link } from 'react-router-dom';

const ExamplePage = () => {
  return (
    <React.Fragment>
      <Example />
      <div>
        This is a normal div with a link to{' '}
        <Link to='/another'>another page</Link>{' '}
      </div>
    </React.Fragment>
  );
};

export default ExamplePage;
