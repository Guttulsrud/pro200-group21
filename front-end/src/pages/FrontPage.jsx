import React from 'react';
import { Div } from '../elements/divs/Div';
import SearchField from '../components/SearchField';
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
      <Div marginLeft='20px' marginRight='20px' paddingTop='30px'>
        <SearchField />
      </Div>
    </Div>
  );
};

export default FrontPage;
