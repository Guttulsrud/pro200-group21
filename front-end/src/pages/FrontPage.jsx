import React from 'react';
import { Link } from 'react-router-dom';
import { Div } from '../elements/divs/Div';
import { Button } from '../elements/buttons/Button';
import SearchField from '../components/SearchField';

const FrontPage = () => {
  return (
    <Div
      bg='vyGray'
      height={300}
      borderColor='vyGreen'
      borderRadius={5}
      color='#fff'
      textAlign='center'
      position='relative'
    >
      <SearchField />

      <Button inactive bottom center>Velg fra</Button>

    </Div>
  );
};

export default FrontPage;
