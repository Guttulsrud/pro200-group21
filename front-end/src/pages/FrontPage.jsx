import React from 'react';
import { Div } from '../elements/divs/Div';
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

    </Div>
  );
};

export default FrontPage;
