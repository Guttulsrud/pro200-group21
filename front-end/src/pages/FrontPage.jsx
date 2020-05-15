import React from 'react';
import { Link } from 'react-router-dom';
import { Div } from '../elements/divs/Div';
import { Button } from '../elements/buttons/Button';
import SearchField from '../components/SearchField';
import MapContainer from '../components/MapContainer'

const FrontPage = () => {
  return (
    <Div
      borderColor='vyGreen'
      borderRadius={5}
      color='#fff'
      marginBottom='82px'
    >
      <MapContainer />

      <SearchField />


      <Button width='100%' inactive bottom center>Velg fra</Button>

    </Div>
  );
};

export default FrontPage;
