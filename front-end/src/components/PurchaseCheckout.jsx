import React from 'react';
import {Div} from '../elements/divs/Div';
import Heading from '../elements/text/StyledHeading';
import tickets from '../utils/tickets';
import Select from 'react-select';


const BusSelection = props => {

    const options = [
        {value: 'Vipps', label: <div><img src="/images/vipps.png" height="40px" width="100px"/></div>}
    ];

    return (
        <Div bg={'#fff'} width={1} display={'flex'} flexDirection={'column'}>
            <Div display={'flex'} width={1}>

                <Div display={'flex'} width="100%" alignItems="center" pl={20} pr={20}>

                    <Div height={48} width={48}>
                        <img height="48px" width="48px" src={'/images/bus-48.png'} alt={"Buss ikon"}/>
                    </Div>
                    <Div>

                        <Heading.h1 fontSize="2rem" color={'vyBlack'}
                                    pl={10}>{props.bus.name}</Heading.h1>

                    </Div>
                    <Div>
                        <Heading.h3 fontSize="1.4rem" fontWeight={300} ml={20}>{props.bus.eta} min</Heading.h3>
                    </Div>


                </Div>


            </Div>

            <Div display="flex">


            </Div>
            <Div pr={20} pl={20} pb={20}>
                <Div mr={10}>

                    <Heading.h2 mb="-12px">Fra</Heading.h2>
                    <Div display="flex" alignItems="center" justifyContent="space-between">

                        <Heading.h2 ml={15} fontSize="1.8rem" fontWeight="300" display="flex" flexDirection="column"
                                    alignItems="center">

                            {props.origin}
                        </Heading.h2>
                        <img height={48} width={48} src={'/images/pin-48-from.png'} alt={"Reise fra-ikon."}/>
                    </Div>

                </Div>


                <Div mr={10}>

                    <Heading.h2 mb="-12px">Til</Heading.h2>
                    <Div display="flex" alignItems="center" justifyContent="space-between">

                        <Heading.h2 ml={15} fontSize="1.8rem" fontWeight="300" display="flex" flexDirection="column"
                                    alignItems="center">

                            {props.destination}
                        </Heading.h2>
                        <img height={48} width={48} src={'/images/pin-48-to.png'} alt={"Reise til-ikon."}/>
                    </Div>

                </Div>

            </Div>

            <Div pr={20} pl={20} display="flex" alignItems="center">


            </Div>
            <Div className="checkout-list" pl={20} pr={20} pb={20} borderBottom={'1px solid #D7D8D9'}>
                <ul>
                    {tickets.map(t => {
                        return (
                            t.qty > 0 ?
                                <li key={t.type}>
                                    <Div color="#616567">{t.type}</Div>
                                    <Div color="#616567">x{t.qty}</Div>
                                </li>
                                : null
                        );
                    })}
                </ul>
            </Div>
            <Div display={'flex'} justifyContent="space-between">
                <Div>
                    <Heading.h2 pl={20}>Total sum:</Heading.h2>
                </Div>
                <Div>
                    <Heading.h2 pr={20}>{props.sum} kr</Heading.h2>
                </Div>
            </Div>

            <Div pl={20} pr={20} pb={20}>
                <Select options={options} placeholder="Velg betalingsmåte"/>
            </Div>


        </Div>
    );
};

export default BusSelection;