import React from 'react';
import Heading from '../elements/text/StyledHeading';
import Text from '../elements/text/StyledText';
import {Div} from '../elements/divs/Div';

const NotFound = () => {
  return (
    <Div minHeight={"100%"} width={1} mt={0} display={"flex"} position={"absolute"}>
      <Heading.h1 fontSize={[35,70]} m={"auto"} textAlign={"center"} color={"vyBlack"}><Text.span fontSize={[90,180]} color={"vyGreen"} >404!</Text.span> <br/> Siden du leter etter finnes ikke</Heading.h1>

    </Div>
  );
};

export default NotFound;
