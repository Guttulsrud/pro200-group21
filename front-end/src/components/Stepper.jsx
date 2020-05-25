import React from 'react';
import { Div } from '../elements/divs/Div';
import { Button } from '../elements/buttons/Button';
import text from '../elements/text/StyledText';

class Stepper extends React.Component {
    state = {
        steps: []


    };

    componentDidMount() {
        const { steps, currentStepNumber } = this.props;
        const stepsState = steps.map((step, index) => {
            const stepObj = {};
            stepObj.description = step;
            stepObj.completed = false;
            stepObj.highlighted = index === 0 ? true : false;
            stepObj.selected = index === 0 ? true : false;
            return stepObj;

        });

        const currentSteps = this.updateStep(currentStepNumber - 1, stepsState);
        this.setState({
            steps: currentSteps
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentStepNumber !== this.props.currentStepNumber) {
            const { steps } = this.state;
            const currentSteps = this.updateStep(this.props.currentStepNumber - 1, steps);

            this.setState({
                steps: currentSteps
            });
        }

    }

    updateStep(stepNumber, steps) {
        const newSteps = [...steps];

        //Completed - to show a checkmark

        //Selected - to fill the step with color

        //Highlighted - to make the description bold

        // 1. Current step
        // 2. Past step
        // 3. Future step

        let stepCounter = 0;
        while (stepCounter < newSteps.length) {
            // Current step
            if (stepCounter === stepNumber) {
                newSteps[stepCounter] = {
                    ...newSteps[stepCounter],
                    highlighted: true,
                    selected: true,
                    completed: false,
                };
                stepCounter++;
                console.log(newSteps)
            }

            //Past step
            else if (stepCounter < stepNumber) {
                newSteps[stepCounter] = {
                    ...newSteps[stepCounter],
                    highlighted: false,
                    selected: true,
                    completed: true
                };
                stepCounter++;
            }

            //Future step
            else {
                newSteps[stepCounter] = {
                    ...newSteps[stepCounter],
                    highlighted: false,
                    selected: false,
                    completed: false
                };
                stepCounter++;
            }

        }
        return newSteps;


    }
    render() {

        const { direction } = this.props;
        const { steps } = this.state;
        const stepsDisplay = steps.map((step, index) => {
            return (
                <Div key={index} display="flex" flexDirection="column" alignItems="center" width="23%" position="relative">
                    <Div display="flex" borderRadius={80} height="24px" width="24px" border="3px solid" borderColor={step.selected ? "vyGreen" : "#D7D8D9"} backgroundColor={step.selected ? "vyGreen" : "none"}><text.p margin="auto" textAlign="center" color={step.selected ? "#FFFFFF" : "#D7D8D9"}>{step.completed ? <span>&#10003;</span> : index + 1}</text.p></Div>
                    <Div><text.p textAlign="center" fontWeight={step.highlighted ? "bold" : "normal"} color={step.highlighted ? "vyBlack" : "#D7D8D9"}>{step.description}</text.p></Div>
                    <Div className={index !== steps.length - 1 && "divider-line"}></Div>
                </Div >
            );
        });
        return (
            <React.Fragment>

                <Div display="flex" flexDirection="row" alignContent="center" justifyContent="space-between" position="relative" marginBottom="20px">
                    {stepsDisplay}
                </Div>


            </React.Fragment >
        );
    }
}

export default Stepper;