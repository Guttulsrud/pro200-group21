import React from 'react';
import styled, {css} from 'styled-components';
import {Div} from '../elements/divs/Div';
import {ChevronRightIcon} from './Icons/ChevronRightIcon';
import {DateIcon} from './Icons/DateIcon';
import {Link} from 'react-router-dom';
import Text from '../elements/text/StyledText';


export const DateField = styled.div`
  
  height: 1em;
  display: flex;
  align-items: center;
  margin: 1em 2em 1.5em 0;
  
`;

export const DestField = styled.div`
  
  height: 1em;
  display: flex;
  align-items: center;
  margin: 1em 2em 1em 0;
  
`;

export const Status = styled.div`
  width: 3em;
  border-radius: 5px;
  min-width: 3em;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.active &&
    css`
      background-color: #00866e;
      color: #FFFFFF;
      padding: 0.5em;
    `}

  ${(props) =>
    props.inactive &&
    css`
      background-color: #DDDDDD;
      color: black;
      padding: 0.5em;
    `}

  ${(props) =>
    props.receipt &&
    css`
      background-color: #DDDDDD;
      color: black;
      padding: 1em 0;
      width: 100%;
    `}
  
`

const Ticket = (props) => {


    const date = new Date(props.ticketdata.expiration)
    const minutes = date.getMinutes()
    const hours = date.getHours()
    const minutePrefix = minutes.toString().length === 1 ? "0" : "";
    const hourPrefix = hours.toString().length === 1 ? "0" : "";

    const dateString = `${hourPrefix + "" + hours}:${minutePrefix + "" + minutes} ${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`
    const [receiptVisible, setReceiptVisible] = React.useState(false)

    const toggleReceipt = () => {
        setReceiptVisible(!receiptVisible)

    }


    return (
        <React.Fragment>
            <Div display="flex"
                 bg="#FFFFFF"
                 alignItems="center"
                 justifyContent="space-between"
                 borderBottom={"1px solid #D7D8D9"}
                 mb={10}
                 width="100%"
            >

                <Div mx={15} my={10}>

                    <DateField>
                        <Div mr={"1em"} display="flex" alignItems="center" justifyContent="center">
                            <DateIcon/>
                        </Div>
                        <p>{dateString}</p>
                    </DateField>
                    <DestField borderTop="#616567" display="flex" alignItems="center" justifyContent="center">
                        <Div mr={"1em"} display="flex" alignItems="center" justifyContent="center">
                            <ChevronRightIcon/>
                        </Div>

                        <Text.p color={'#616567'} m={0} p={0}
                                style={{overflowWrap: "break-word"}}>{props.ticketdata.route.destination.title}</Text.p>
                    </DestField>
                </Div>

                <Div mx={15} my={10}>
                    {props.ticketdata.expiration < Date.now() ?
                        <Status inactive onClick={toggleReceipt}>Utgått</Status> :
                        <Link to={`/activeticket?${props.ticketdata._id}`} style={{textDecoration: 'none'}}><Status
                            active>Aktiv</Status></Link>}
                </Div>
                {/*<Receipt visible={receiptVisible} ticketdata={props.ticketdata} toggleReceipt={toggleReceipt}></Receipt>*/}

            </Div>
        </React.Fragment>
    );
}


export default Ticket;






