import styled, {css} from 'styled-components';
import {border, color, flexbox, layout, margin, padding, position, space, typography} from 'styled-system';

export const RoundBtn = styled.button`
  ${space}
  ${color}
  ${border}
  ${layout}
  ${flexbox}
  ${typography}
  ${position}
  ${margin}
  ${padding}
  background-color: #003A70;
  height: 38px;
  width: 38px;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  padding: 0;
  transition: .2s linear;

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
    props.large &&
    css`
        height: 50px;
        width: 50px;
      `}

      ${(props) =>
    props.inactive &&
    css`
          background-color: #a7bcd6;
          color: #003a70;
          cursor: not-allowed;
        `}
`;
