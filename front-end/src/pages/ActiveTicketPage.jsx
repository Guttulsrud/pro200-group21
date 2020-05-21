import React from 'react';
import { Div } from '../elements/divs/Div';
import { Button } from '../elements/buttons/Button';
import { RoundBtn } from '../elements/buttons/RoundBtn';
import { ChevronLeftIcon } from '../components/Icons/ChevronLeftIcon'
import { Timeline } from '../components/TimeLine'
import DummyMap from '../components/DummyMap'
import { QRcode } from '../components/Icons/qrcode';



const ActiveTicketPage = (props) => {

  const [busName, setBusName] = React.useState("TestYan 123")
  const [busTime, setBusTime] = React.useState(5)
  const [journey, setJourney] = React.useState([])
  const [busHasArrived, setBusHasArrived] = React.useState(false)
  const [journeyHasStarted, setJourneyHasStarted] = React.useState(true)

    
    const handleBusName = () => {
      setBusName()
    
    }

    const handleBusTime = () => {
      setBusTime()
    
    }

    const handleBusJourney = () => {
      setJourney()
    
    }

  return (
    <>
      <RoundBtn secondary mt={'2em'} mx={'1em'} position="absolute" top="0"><ChevronLeftIcon /></RoundBtn>
      <Div display="flex" 
           color={"#AAAAAA"} 
           justifyContent="center" 
           alignItems="center" 
           height={busHasArrived ? "32em" : "25em"} 
           width={"100%"} 
           bg={"#DDDDDD"}
      >  
        
        <h1>Kart</h1>
        

      </Div>

      <Div display={busHasArrived ? "none" : "flex"} alignItems="center" mx={30}>
        <Timeline></Timeline>
      </Div>

      <Div display={journeyHasStarted ? "none" : "flex"} justifyContent="center" alignItems="center" color="#666666" mx={40} my={busHasArrived ? 20 : 10} textAlign="center">
        {!busHasArrived && <h3>{busName} ankommer om {busTime} minutter </h3>}
        {busHasArrived && <h3>{busName} har ankommet</h3>}
        
      </Div>

      <Div mx={40} display={journeyHasStarted ? "none" : "flex"} justifyContent="center" alignItems="center">
        {!busHasArrived ? <Button inactive={busTime < 5}>Avbestill Reise</Button> : <Button>ÅPNE DØR</Button> }
      </Div>

      <Div mx={40} display={journeyHasStarted ? "flex" : "none" } justifyContent="center" alignItems="center">
        <QRcode></QRcode>
      </Div>
    </>
  );
};

export default ActiveTicketPage;
