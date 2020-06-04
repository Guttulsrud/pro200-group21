import React from 'react';
import { Div } from '../elements/divs/Div';
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
            stepObj.highlighted = index === 0;
            stepObj.selected = index === 0;
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

        // const { direction } = this.props;
        const { steps } = this.state;
        const stepsDisplay = steps.map((step, index) => {
            return (
                <Div key={index} display="flex" flexDirection="column" alignItems="center" width="23%"
                    position="relative">
                    <Div display="flex" borderRadius="100%" height="15px" width="15px" border="3px solid"
                        borderColor={step.selected ? 'vyGreen' : 'vyGreen'}
                        backgroundColor={step.selected ? 'none' : 'none'}>{step.completed ?
                            <text.p margin="auto" fontSize="0.8rem" fontWeight="700" textAlign="center" borderRadius="100%" height="16px" width="16px" backgroundColor="vyGreen" color="#ffffff"><span>&#10003;</span></text.p> :
                            <Div borderRadius="100%" width="100%" backgroundColor={step.selected ? 'vyGreen' : 'none'}
                                margin="2px" />}</Div>
                    <Div>
                        <text.p fontSize="0.8rem" textAlign="center" fontWeight={step.highlighted ? 'bold' : 'normal'}
                            color={step.highlighted ? 'vyBlack' : 'vyGreen'}>{step.description}</text.p>
                    </Div>
                    <Div className={index !== steps.length - 1 && 'divider-line'} />
                </Div>
            );
        });
        return (
            <React.Fragment>

                <Div display="flex" flexDirection="row" alignContent="center" justifyContent="space-between"
                    position="relative" mt={10}>
                    {stepsDisplay}
                </Div>


            </React.Fragment>
        );
    }
}

export default Stepper;