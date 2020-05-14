import React, { useState } from 'react';
import { StyledExample } from '../elements/StyledExample';

const Example = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <h1>This is the example component</h1>
      <StyledExample onClick={handleClick}>Hello World</StyledExample>
      {clicked && <p>Hello World</p>}
    </div>
  );
};

export default Example;
