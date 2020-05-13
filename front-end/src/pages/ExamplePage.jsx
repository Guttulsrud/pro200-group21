import React, { useState } from 'react';
import Example from '../components/Example';
import { Link } from 'react-router-dom';
import { Input } from '../elements/inputs/StyledInput';
import { TestBtn, TestButton } from '../elements/buttons/TestButton';

const ExamplePage = () => {
  const [filled, setFilled] = useState(false);

  const handleFilled = (value) => {
    if (value !== '') {
      setFilled(true);
    } else {
      setFilled(false);
    }
    console.log(value);
  };

  const handleFetch = () => {
    console.log('Clicked');
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
        <p onClick={handleFetch}>Click</p>
      </div>
      <TestBtn>No props</TestBtn> <br /> <br />
      <TestBtn background='vy-green'>Bg prop vy-green</TestBtn> <br /> <br />
      <TestBtn background='vy-blue'>Bg prop vy-blue</TestBtn>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <TestButton>No props</TestButton> <br /> <br />
      <TestButton primary>Primary prop</TestButton> <br /> <br />
      <TestButton secondary>Secondary prop</TestButton> <br /> <br />
      <TestButton inactive>Inactive prop</TestButton>
    </React.Fragment>
  );
};

export default ExamplePage;
