import React from 'react';
import { Div } from '../elements/divs/Div';
import { RoundBtn } from '../elements/buttons/RoundBtn';
import { ChevronLeftIcon } from '../components/Icons/ChevronLeftIcon'
import Ticket from '../components/Ticket'

const TicketPage = () => {


  const simulatedTickets = [
    
    {
      date: "Tir, 12 Mai ", 
      from: "Oscars Gate 14",
      dest: "Sloraveien 12", 
      active: true, 
      travelers: ["1 voksen"], 
      type: "Enkel Reise", 
      purchased: "Tir, 12 Mai, 12:23:12", 
      price: "NOK 37,- incl. VAT", 
      orderID: "AFG 23 23 45 34", 
      expired: "active"
    },

    {
      date: "Ons, 6 Mai ", 
      from: "Oscars Gate 14", // disse to vil nok naturlig komme fra bestilling gjort fra kartet
      dest: "Stanseveien 31", // Samme med denne
      active: false,    // Om billetten er aktiv eller ikke
      travelers: ["1 voksen", "1 barn"], 
      type: "Enkel Reise", // Typene kan hete hva som helst, bare et eksempel
      purchased: "Ons, 6 Mai, 07:34:52", // samme som date, men greit med klokkeslett (gidder ikke splitte)
      price: "NOK 37,- incl. VAT",  // Pris med eksempel på format
      orderID: "AFG 73 89 435 34", // (simulert) Kan være hva som helst av ID
      expired: "Ons, 6 Mai, 08:10:13"
    },

    {
      date: "Fre, 24 Apr ", 
      from: "Wesselsgate 2",
      dest: "Oscars Gate 14", 
      active: false,
      travelers: ["1 voksen"],
      type: "Enkel Reise", 
      purchased: "Fre, 24 Apr, 14:21:32", 
      price: "NOK 37,- incl. VAT", 
      orderID: "AFG 34 45 22 34", 
      expired: "Fre, 24 Apr, 15:16:02"
    },
    
  ]

  return (
    <Div mx={'1em'}>
      <Div >
        <RoundBtn secondary mt={'2em'}><ChevronLeftIcon /></RoundBtn>
        <h1>Mine reiser</h1>
      </Div>
      <Div>
        {simulatedTickets.map((item, i) => (
          <Ticket key={"Ticket_ " + i}
                  ticketdata={item}
          />
        ))}
      </Div>
    </Div>
  );
};

export default TicketPage;
