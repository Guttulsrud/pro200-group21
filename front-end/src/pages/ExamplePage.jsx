import React, { useState } from 'react';
import Example from '../components/Example';
import { Link } from 'react-router-dom';
import { Input } from '../elements/inputs/StyledInput';

const ExamplePage = () => {
  const [filled, setFilled] = useState(false);

  const handleFilled = (kek) => {
    if (kek !== '') {
      setFilled(true);
    } else {
      setFilled(false);
    }
    console.log(kek);
  };

  return (
    <React.Fragment>
      <Example />
      <div>
        This is a normal div with a link to{' '}
        <Link to='/another'>another page</Link>{' '}
      </div>
      <div className='test-div'>
        <Input
          placeholder='Hvor vil du reise fra?'
          filled={filled}
          onChange={(e) => handleFilled(e.target.value)}
        />
      </div>
    </React.Fragment>
  );
};

export default ExamplePage;
