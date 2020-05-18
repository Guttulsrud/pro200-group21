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
      <Div
        marginLeft='20px'
        marginRight='20px'
        paddingTop='30px'
      >


        <SearchField />
        <Button inactive bottom center>Velg fra</Button>

      </Div>



    </Div>
  );
};

export default FrontPage;
