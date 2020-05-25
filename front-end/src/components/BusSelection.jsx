import React from 'react';
import {Div} from '../elements/divs/Div';
import Heading from '../elements/text/StyledHeading';
import Text from '../elements/text/StyledText';
import {ChevronRightIcon} from './Icons/ChevronRightIcon';


const BusSelection = props => {
    return (
        <Div bg={'#fff'} height={135} width={1} display={'flex'} flexDirection={'column'} color={'#616567'} >
            <Div display={'flex'} justifyContent={"space-between"} pt={20} pb={30} width={1} borderBottom={"1px solid #D7D8D9"} >
                <Div display={"flex"} pl={20}>
                    <Div height={48} width={48}>
                        <img src={'/images/bus-48.png'}/>
                    </Div>
                    <Heading.h1 color={"vyBlack"} pl={10} my={0} pt={5}>Vyvian 521</Heading.h1>
                </Div>
                <Text.p pr={20}>4 min</Text.p>
            </Div>
            <Div display={"flex"} m={"auto"} width={1}>
                <Div pl={18}>
                    <ChevronRightIcon/>
                </Div>
                <Text.p m={0} pt={3}>Biermannsgate</Text.p>
            </Div>
        </Div>
    );
};

export default BusSelection;