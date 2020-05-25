import React from 'react';
import {Div} from '../elements/divs/Div';
import Heading from '../elements/text/StyledHeading';
import Text from '../elements/text/StyledText';


const BusSelection = props => {
    return (
        <Div bg={'#fff'} height={135} width={1} display={'flex'} flexDirection={'column'} color={'vyBlack'} >
            <Div display={'flex'} justifyContent={"space-between"} pt={20} pb={30} width={1} borderBottom={"1px solid #D7D8D9"} >
                <Div display={"flex"} pl={20}>
                    <Div height={48} width={48}>
                        <img src={'/images/bus-48.png'}/>
                    </Div>
                    <Heading.h1 pl={10} my={0} pt={5}>Vyvian 521</Heading.h1>
                </Div>
                <Text.p color={"#616567"} pr={20}>4 min</Text.p>
            </Div>
        </Div>
    );
};

export default BusSelection;