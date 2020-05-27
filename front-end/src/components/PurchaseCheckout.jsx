import React from 'react';
import { Div } from '../elements/divs/Div';
import Heading from '../elements/text/StyledHeading';
import Text from '../elements/text/StyledText';
import { ChevronRightIcon } from './Icons/ChevronRightIcon';


const BusSelection = props => {
    return (
        <Div bg={'#fff'} width={1} display={'flex'} flexDirection={'column'} >
            <Div display={'flex'} justifyContent={"space-between"} width={1} >

                <Div display={"flex"} alignItems="center" pl={20} pr={20} justifyContent={"space-between"}>
                    <Div height={48} width={48}>
                        <img src={'/images/bus-48.png'} />
                    </Div>
                    <Heading.h1 color={"vyBlack"} pl={10}>{props.name}</Heading.h1>

                </Div>
                <Div display="flex" alignItems="center">

                    <Heading.h3 pr={20}>Kommer 2 min</Heading.h3>
                </Div>

            </Div>

            <Div display="flex" alignItems="center">



            </Div>
            <Div pr={20} pl={20} display="flex" alignItems="center">
                <Div height={32} width={32} mr={10}>
                    <img height={32} width={32} src={'/images/pin-48-from.png'} />
                </Div>
                <Heading.h2>

                    Fra Someaddress 2
                    </Heading.h2>
            </Div>

            <Div pr={20} pl={20} display="flex" alignItems="center">
                <Div height={32} width={32} mr={10}>
                    <img height={32} width={32} src={'/images/pin-48-to.png'} />
                </Div>
                <Heading.h2 display={"flex"}>

                    Til Someaddress 3
                    </Heading.h2>

            </Div>
            <Div className="checkout-list" pl={20} pr={20} pb={20} borderBottom={"1px solid #D7D8D9"}>
                <ul>
                    <li>
                        <Div>Barn</Div>
                        <Div>x2</Div>
                    </li>
                    <li>
                        <Div>Voksen</Div>
                        <Div>x2</Div>
                    </li>
                </ul>
            </Div>

            <Div display={"flex"} justifyContent="center" pl={20} pr={20} pt={20} className="checkout-select">
                <select id="payment">
                    <option value="0">Velg betalingsmetode</option>
                    <option value="1">Vipps</option>
                </select>
            </Div>
            <Div display={"flex"} justifyContent="space-between">
                <Div>
                    <Heading.h2 pl={20}>Total sum:</Heading.h2>
                </Div>
                <Div>
                    <Heading.h2 pr={20}>{props.sum} kr</Heading.h2>
                </Div>
            </Div>

        </Div>
    );
};

export default BusSelection;