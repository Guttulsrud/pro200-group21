import React from 'react';
import {Div} from '../elements/divs/Div';
import {BusIcon} from "./Icons/BusIcon";


export class TimeLine extends React.Component {

    state = {
        journeyHasStarted: true,
        from: '',
        to: '',
        
        
    };


    getTicketFromId = async (id) => {
        const url = `http://localhost:5000/ticket/details/${id}`;

        return await fetch(url)
            .then(response => response.json()).then(res => {
                return res;
            })

    }


    componentDidMount() {

        this.getTicketFromId(this.props.ticketId).then(ticket => this.setState({
            from: ticket.route.origin.title,
            to: ticket.route.destination.title
        }))
    }


    render() {


        return (
            <Div display="flex" justifyContent="space-around" alignItems="center" flexDirection="column" width={"100%"}>

                <Div display="flex" justifyContent="space-between" alignItems="center" width={"100%"}>
                    <h5 style={{marginLeft: -9}}>{this.state.from}</h5>
                    <h5 style={{marginRight: -9}}>{this.state.to}</h5>
                </Div>

                <Div display="flex" alignItems="center" justifyContent="center" width={"100%"} position="relative">
                    
                    <Div width={"88%"} 
                         position="relative" 
                         height="5px" 
                         display="flex"
                         alignItems="center"
                         borderBottom="4px solid #003A70"
                         borderTop="4px solid #003A70"
                         borderLeft="none"
                         borderRight="none"
                         zIndex="99999" 
                         bg="#fff">

                         
                      <Div height="3px" bg={"#003A70"} width={"" + this.props.progress + "%"}>
                      
                      </Div>

                    </Div>

                    
                   
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
                        <Div bg={"#003A70"} borderRadius="100px" height=".6em" width=".6em"
                             position="absolute"></Div>

                    </Div>

                    <Div bg={"white"} left="0" border="4px solid #003A70" borderRadius="100px" height="1em"
                         width="1em"
                         position="absolute"></Div>

                </Div>

                <Div display="flex" justifyContent="space-between" alignItems="center" width={"100%"}>
                    <h4 style={{marginLeft: -9}}>10:05</h4>
                    <h4 style={{marginRight: -9}}>11:14</h4>
                </Div>

            </Div>

        );
    }

}

export default TimeLine
