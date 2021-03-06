import styled, {css, keyframes} from 'styled-components';
import {position, space} from 'styled-system';

const pulse = keyframes`
 from{
     height: 56px;
     width:  70%;
      
  }to {
      height: 58px;
      width:  71%;   
  }
`

export const Button = styled.button`
  ${space};
  ${position};
  background-color: #003a70;
  height: 56px;
  min-height: 56px;
  width:  ${(props) =>
    props.width ? props.width : '100%'};
  font-size: 18px;
  color: #fff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: .2s linear;
  ${(props) => props.animate && css`
    animation: ${pulse} 1s linear infinite alternate;
`}
  
       
    ${(props) =>
    props.secondary &&
    css`
        background-color: #00866e;
      `}
    ${(props) =>
    props.outlineBlue &&
    css`
        background-color: #fff;
        color: #003a70;
        border: 2px solid #003a70;
      `}
    ${(props) =>
    props.outlineGreen &&
    css`
        background-color: #fff;
        color: #00866e;
        border: 2px solid #00866e;
      `}
    ${(props) =>
    props.outlineOrange &&
    css`
        background-color: transparent;
        color: #FF3800;
        border: 2px solid #FF3800;
      `}
    ${(props) =>
    props.inactive &&
    css`
        background-color: #a7bcd6;
        color: #003a70;
        cursor: not-allowed;
      `}
    ${(props) =>
    props.inactiveOutline &&
    css`
        color: #b9b9b9;
        border-color: #b9b9b9;
        cursor: not-allowed;
      `}
    ${(props) =>
    props.xl &&
    css`
        height: 100px;
        width: 500px;
      `}
    ${(props) =>
    props.large &&
    css`
        height: 80px;
        width: 400px;
      `}
    ${(props) =>
    props.small &&
    css`
        height: 50px;
        width: 200px;
      `};
    ${(props) =>
    props.bottom &&
    css`
        position: absolute;
        bottom: 10px;
      `};
    ${(props) =>
    props.center &&
    css`
        left: 50%;
        transform: translate(-50%);
      `};
`;
