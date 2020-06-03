import React from 'react';
import TutorialDialog from '../components/TutorialDialog'

class TestDialog extends React.Component {
    state = {};

    getLsData = () => {
        let getData = JSON.parse(localStorage['showTutorial'])
        return getData;
    };

    render() {
        console.log(this.getLsData())
        return (

            <div>
                {(this.getLsData() === true) ? <TutorialDialog /> : null}
            </div>
        );
    }
}

export default TestDialog;