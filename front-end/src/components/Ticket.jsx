import React from 'react';
import styled, { css } from 'styled-components';
import { Div } from '../elements/divs/Div';
import { ChevronRightBig } from '../components/Icons/ChevronRightBig';
import { DateIcon } from '../components/Icons/DateIcon';
import { Link } from 'react-router-dom';


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

  const [receiptVisible, setReceiptVisible] = React.useState(false)

  
    
    const toggleReceipt = () => {
      setReceiptVisible(!receiptVisible)
    
    }

    return (
      <React.Fragment>
          <Div display="flex" 
               bg="white"
               alignItems="center" 
               border="1px solid #DDDDDD"
               justifyContent="space-between"
               boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.07)"
               mb={10}
               
          >
            
            <Div mx={15} my={10}>
            
              <DateField>
                <Div mr={"1em"} display="flex" alignItems="center" justifyContent="center">
                  <DateIcon/>
                </Div>
                <p>{props.ticketdata.expiration}</p>
              </DateField>
              <DestField>
                <Div mr={"1em"} display="flex" alignItems="center" justifyContent="center">
                  <ChevronRightBig/>
                </Div>
                
                <h3>{props.ticketdata.route.destination.title}</h3>
              </DestField>
            </Div>

            <Div mx={15} my={10} >
              {props.ticketdata.archived ? <Status inactive onClick={toggleReceipt}>Utgått</Status> : <Link to={`/activeticket?${props.ticketdata._id}`} style={{ textDecoration: 'none' }}><Status active>Aktiv</Status></Link> }
            </Div>
            {/*<Receipt visible={receiptVisible} ticketdata={props.ticketdata} toggleReceipt={toggleReceipt}></Receipt>*/}

          </Div>
      </React.Fragment>
    );
  }


export default Ticket;






