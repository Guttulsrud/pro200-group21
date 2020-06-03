import React from 'react';
import MapContainer from '../components/MainMap';
import {Transition} from 'react-spring/renderprops-universal';
import TutorialDialog from '../components/TutorialDialog';

const FrontPage = () => {
  const getLsData = () => {
    let getData = JSON.parse(localStorage['showTutorial'])
    return getData;
  };


  return (

    <div>


      <MapContainer />

      {(getLsData() === true) ? <TutorialDialog /> : null}
    </div>
  );
};

export default FrontPage;
