import styled, { css } from 'styled-components';

export const Button = styled.button`
  background-color: #003a70;
  height: 56px;
  width:  ${(props) =>
    props.width ? props.width : '100%'};
  font-size: 18px;
  color: #fff;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
       
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
    props.inactive &&
    css`
        background-color: #a7bcd6;
        color: #003a70;
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
