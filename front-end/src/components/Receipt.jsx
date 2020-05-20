import React from 'react';
import { Div } from '../elements/divs/Div'
import { Status } from './Ticket'
import { RoundBtn } from '../elements/buttons/RoundBtn';
import { ChevronLeftIcon } from '../components/Icons/ChevronLeftIcon'

export const Receipt = (props) => {
  
  return (
    
      <Div display={!props.visible ? "none" : "flex"} 
           justifyContent="center"
           alignItems="center"
           flexDirection="column"
           position="absolute"
           width={"91%"}
           bg={"white"}
           border={"1px solid #DDDDDD"}
           borderRadius="5px"
           boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.07)"
      >

        <Status receipt>Utgått {props.ticketdata.expired}</Status>
        <Div display="flex" justifyContent="space-around" alignItems="center" width={"100%"}>
          <h3>{props.ticketdata.dest}</h3>
          {props.ticketdata.travelers.map((t) => (<p>{t}</p>)) }
        </Div>
        <Div display="flex" justifyContent="space-around" alignItems="center" width={"100%"}>
          <h3>Pris:</h3>
          <p>{props.ticketdata.price}</p>
        </Div>
        <Div display="flex" justifyContent="space-around" alignItems="center" flexDirection="column" width={"100%"}>
          <p margin="0">{props.ticketdata.type}</p>
          <h4>Kjøpt</h4>
          <p>{props.ticketdata.purchased}</p>
          <h4>BestillingsID</h4>
          <p>{props.ticketdata.orderID}</p>
        </Div>
        <RoundBtn secondary my={'1em'} onClick={props.toggleReceipt}><ChevronLeftIcon /></RoundBtn>

      </Div>
    
  )};

export default Receipt;
