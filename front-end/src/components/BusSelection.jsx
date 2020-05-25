import React from 'react';
import {Div} from '../elements/divs/Div';
import Heading from '../elements/text/StyledHeading';


const BusSelection = props => {
    return (
        <Div bg={"#fff"} height={135} width={1} display={"flex"} flexDirection={"column"} color={"vyBlack"}>
            <Div display={"flex"} pt={20} px={20} width={1}><Div height={48} width={48}><img src={"/images/bus-48.png"}/></Div><Heading.h1 pl={10} my={0} pt={5}>Vyvian 521</Heading.h1></Div>
        </Div>
    )
};

export default BusSelection