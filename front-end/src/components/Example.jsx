import React, { useState } from 'react';
import { Button } from '../elements/StyledExample'; // Her hentes Button (styled component) fra StyledExample

const Example = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <h1>This is the example component</h1>
      <Button onClick={handleClick}>Hello World</Button>
      {clicked && <p>Hello World</p>}
    </div>
  );
};

export default Example;
