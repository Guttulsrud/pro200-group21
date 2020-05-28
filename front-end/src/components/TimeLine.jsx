import React from 'react';
import {Div} from '../elements/divs/Div';
import {BusIcon} from '../components/Icons/BusIcon';

export const Timeline = (props) => {

    const [depTime, setDepName] = React.useState("10:34")
    const [arrTime, setArrTime] = React.useState("11:12")
    const [depLocation, setDepLocation] = React.useState("Stanseveien 31")
    const [arrLocation, setArrLocation] = React.useState("Oscars Gate 14")




    return (
        <Div display="flex" justifyContent="space-around" alignItems="center" flexDirection="column" width={"100%"}>

            <Div display="flex" justifyContent="space-between" alignItems="center" width={"100%"}>
                <h5 style={{marginLeft: -9}}>{depLocation}</h5>
                <h5 style={{marginRight: -9}}>{arrLocation}</h5>
            </Div>

            <Div display="flex" justifyContent="space-around" alignItems="center" width={"100%"} position="relative">

                <Div width={"100%"} position="relative" height="3px" bg={"#003A70"}></Div>

                {props.journeyHasStarted &&
                <Div borderRadius="100px"
                     bg={"#003A70"}
                     height="2.5em"
                     width="2.5em"
                     position="absolute"
                     left="30%"
                     display="flex"
                     justifyContent="center"
                     alignItems="center"

                >
                    <BusIcon></BusIcon>

                </Div>}

                <Div display="flex"
                     alignItems="center"
                     justifyContent="center"
                     bg={"white"} right="0"
                     border="4px solid #003A70"
                     borderRadius="100px"
                     height="1em"
                     width="1em"
                     position="absolute"
                >
                    <Div bg={"#003A70"} borderRadius="100px" height=".6em" width=".6em" position="absolute"></Div>

                </Div>

                <Div bg={"white"} left="0" border="4px solid #003A70" borderRadius="100px" height="1em" width="1em"
                     position="absolute"></Div>

            </Div>

            <Div display="flex" justifyContent="space-between" alignItems="center" width={"100%"}>
                <h4 style={{marginLeft: -9}}>{depTime}</h4>
                <h4 style={{marginRight: -9}}>{arrTime}</h4>
            </Div>

        </Div>
    );
};