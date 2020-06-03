import React from 'react';
import { Div } from '../elements/divs/Div';
import { Button } from '../elements/buttons/Button';
import Stepper from './Stepper';
import { CloseIcon } from './Icons/CloseIcon';
import Text from '../elements/text/StyledText';

class TutorialDialog extends React.Component {
    state = {
        currentStep: 1,
        lastStep: 4,
        textColor: "#00866E"
    }

    handleClick = (clickType) => {
        const { currentStep } = this.state;
        localStorage.setItem('showTutorial', false);
        //Not mutate existing state
        let newStep = currentStep;
        clickType === "next" ? newStep++ : newStep--;
        this.setState({
            currentStep: newStep
        });

    }

    handleCloseDialog = () => {
        //For development purposes
        this.setState({
            currentStep: 1
        });
    }


    render() {
        // STEPPER DESCRIPTION
        const stepsArray = ["Velg fra", "Velg til", "Bestill"];
        const { currentStep } = this.state;
        const { lastStep } = this.state;
        const { textColor } = this.state;

        return (
            <Div position="absolute" backgroundColor="rgba(0,0,0,0.6)" mt="-30px" height="100%" width="100%" display="flex" alignItems="center" justifyContent="center" zIndex={999}>

                <Div display="flex" flexDirection="column" justifyContent="space-between" position="relative" className="shadow" width="300px" height="570px" padding="20px" marginTop="20px" backgroundColor="#CCEAE4" borderRadius={10}>

                    <Div width="100%" display="flex" justifyContent="flex-end">

                        { /* MAYBE ADD DIV WITH PROPS INSIDE ICON FOR ONCLICK? */}
                        <div onClick={this.props.showTutorial}>
                            <CloseIcon />
                        </div>
                    </Div>

                    <Div display="flex" alignItems="center" justifyContent="center" width="100%" textAlign="center">

                        {(currentStep === 1) ? <Div display="flex" flexDirection="column" alignItems="center" justifyContent="center"><Div width="280px" height="300px" display="flex" alignContent="center" justifyContent="center"><img src={"images/tutorial/1-crop.png"} height="300px" width="auto"></img></Div><Text.p color={textColor}>Dra i kartet med tommelen for å velge hvor du skal reise fra.</Text.p></Div> : null}
                        {(currentStep === 2) ? <Div display="flex" flexDirection="column" alignItems="center" justifyContent="center"><Div width="280px" height="300px"><img src={"images/tutorial/2-crop.png"} height="300px" width="auto"></img></Div><Text.p color={textColor}>Dra i kartet med tommelen for å velge hvor du skal reise til.</Text.p></Div> : null}
                        {(currentStep === 3) ? <Div display="flex" flexDirection="column" alignItems="center" justifyContent="center"><Div width="280px" height="300px"><img src={"images/tutorial/3-crop.png"} height="300px" width="auto"></img></Div><Text.p color={textColor}>Velg antall reisende for turen og bestill buss!</Text.p></Div> : null}
                        {(currentStep === lastStep) ? <Div display="flex" flexDirection="column" alignItems="center" justifyContent="center"><Div width="280px" height="300px" display="flex" justifyContent="center"><img src={"images/tutorial/4-crop.png"} height="300px" width="auto"></img></Div><Text.p fontSize="2rem" fontWeight="700" color={textColor}>God tur!</Text.p></Div> : null}

                    </Div>

                    {(currentStep === lastStep) ? null :
                        <Stepper
                            steps={stepsArray}
                            currentStepNumber={currentStep}
                            dividerColor="#00866E"
                            inactiveBorderColor="#00866E"
                            selectedFontColor="#00866E"
                            inactiveFontColor="#00866E"
                            selectedNumberFontColor="#FFFFFF"
                            inactiveNumberFontColor="#00866E" />}

                    <Button secondary onClick={(currentStep === lastStep) ? this.props.showTutorial : () => this.handleClick("next")}>{(currentStep === 4) ? "Lukk" : "Neste"}</Button>

                </Div>

            </Div>
        );
    }
}

export default TutorialDialog;