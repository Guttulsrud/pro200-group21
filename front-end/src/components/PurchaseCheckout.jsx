import React from 'react';
import {Div} from '../elements/divs/Div';
import Heading from '../elements/text/StyledHeading';
import VippsLogo from '../images/vipps.png';
import Select from 'react-select';
import tickets from '../utils/tickets';


const BusSelection = props => {
    const options = [
        {value: 'vipps', label: <div><img src={VippsLogo} height="40px" width="100px" alt={"vipps"}/></div>},
    ];

    const customStyles = {
        container: () => ({

            width: 200,
        }),
    };

    return (
        <Div bg={'#fff'} width={1} display={'flex'} flexDirection={'column'}>
            <Div display={'flex'} justifyContent={'space-between'} width={1}>

                <Div display={'flex'} justifyContent="center" width="100%" alignItems="center" pl={20} pr={20} pb={10}
                     mb={10} borderBottom={'1px solid #D7D8D9'}>
                    <Div display={'flex'} justifyContent="center" alignItems="center">
                        <Div height={32} width={32}>
                            <img height="32px" width="32px" src={'/images/bus-48.png'} alt={"bus icon"}/>
                        </Div>
                        <Heading.h1 padding="0" margin="0" lineHeight="0" fontSize="1.6rem" color={'vyBlack'}
                                    pl={10}>{props.bus.name}</Heading.h1>

                    </Div>


                </Div>


            </Div>

            <Div display="flex" alignItems="center">


            </Div>
            <Div pr={20} pl={20} pb={20} display="flex" justifyContent="space-between" alignContent="center"
                 alignItems="center">
                <Div mr={10} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <img height={32} width={32} src={'/images/pin-48-from.png'} alt={"pin icon"}/>
                    <Heading.h2 fontSize="1rem">{props.desFrom}</Heading.h2>
                </Div>

                <Div mr={10} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <img height={32} width={32} src={'/images/pin-48-to.png'} alt={"pin icon"}/>
                    <Heading.h2 fontSize="1rem" display={'flex'}>{props.desTo}</Heading.h2>
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
                                    <Div>{t.type}</Div>
                                    <Div>x{t.qty}</Div>
                                </li>
                                : null

                        );
                    })}
                </ul>
            </Div>

            <Div display={'flex'} justifyContent="center" pl={20} pr={20} pt={20}>
                <Select options={options} styles={customStyles}/>
            </Div>
            <Div display={'flex'} justifyContent="space-between">
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