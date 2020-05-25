import React from 'react';
import { BusIcon } from '../Icons/BusIcon';
import { Div } from '../../elements/divs/Div';


export const BusMarker = (props) => {

  return(
    <Div border="4px solid #003A70" borderRadius="100px" bg={"#003A70"}>
      <BusIcon></BusIcon>
    </Div>
  )
}