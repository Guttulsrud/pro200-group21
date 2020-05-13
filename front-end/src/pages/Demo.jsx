import React from 'react';
import { MainContainer } from '../elements/demo-elements/DemoMainContainer'
import { SubContainer } from '../elements/demo-elements/DemoSubContainer'
import { RoundBtn } from '../elements/StyledRoundBtn'
import { SelectBtn } from '../elements/StyledSelectBtn'


const DemoPage = () => {
    return (
        <React.Fragment>
            <div>
                <h1>The following are component demos / templates</h1>
                <h3>Buttons</h3>
                <MainContainer>
                    <SubContainer>
                        <RoundBtn>+</RoundBtn>
                        <br/>
                        <RoundBtn primary>-</RoundBtn>
                        <ul>
                            <li>Round Button (StyledRoundBtn.js)</li>
                            <li>Round Button Primary (StyledRoundBtn.js)</li>
                        </ul>
                    </SubContainer>
                    <SubContainer>
                        <SelectBtn>Test</SelectBtn>
                        <br/>
                        <SelectBtn primary>Test</SelectBtn>
                        <ul>
                            <li>Select Button (StyledSelectBtn.js)</li>
                            <li>Select Button Primary (StyledSelectBtn.js)</li>
                        </ul>

                    </SubContainer>
                </MainContainer>

            </div>
        </React.Fragment>
    );
};

export default DemoPage;