import React from 'react';
import { Div } from '../elements/divs/Div';
import { Button } from '../elements/buttons/Button';
import MapContainer from '../components/MapContainer';

const FrontPage = () => {
  return (
    <Div
      borderColor='vyGreen'
      borderRadius={5}
      color='#fff'
      marginBottom='82px'
    >
      <MapContainer />
      <Div paddingTop='30px'>
        <Button width='70%' inactive outlineBlue bottom center>
          Velg fra
        </Button>
      </Div>
    </Div>
  );
};

export default FrontPage;
