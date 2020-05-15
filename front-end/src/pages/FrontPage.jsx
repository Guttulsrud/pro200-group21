import React from 'react';
import { Link } from 'react-router-dom';
import { Div } from '../elements/divs/Div';
import { Button } from '../elements/buttons/Button';
import SearchField from '../components/SearchField';

const FrontPage = () => {
  return (
    <Div
      borderColor='vyGreen'
      borderRadius={5}
      color='#fff'
      paddingTop='50px'
      marginLeft='30px'
      marginRight='30px'

    >
      <h1 className='display-1 text--black'>God morgen, hvor skal du?</h1>
      <SearchField />

      <Button inactive bottom center>Velg fra</Button>

    </Div>
  );
};

export default FrontPage;
