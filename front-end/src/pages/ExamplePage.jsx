import React, { useState } from 'react';
import Example from '../components/Example';
import { Link } from 'react-router-dom';
import { Input } from '../elements/inputs/StyledInput';
import { Button } from '../elements/buttons/Button';
import { Div } from '../elements/divs/Div';

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
      <br />
      <br />
      <Div
        bg='vyBlue'
        mt={1}
        height={300}
        width={0.5}
        border='1px solid hotpink'
      ></Div>
      <Button>No props</Button> <br /> <br />
      <Button secondary>Secondary prop</Button> <br /> <br />
      <Button inactive>Inactive prop</Button> <br /> <br />
      <Button small>Small prop</Button> <br /> <br />
      <Button secondary large>
        Secondary & large props
      </Button>
      <br />
      <br />
      <Button inactive large>
        Inactive & large props
      </Button>
      <br /> <br />
      <Button inactive small>
        Inactive & small props
      </Button>
      <br /> <br />
      <Button xl>Xl prop</Button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </React.Fragment>
  );
};

export default ExamplePage;
