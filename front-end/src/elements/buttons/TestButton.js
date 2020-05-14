import styled, { css } from 'styled-components';

export const TestBtn = styled.button`
  background-color: ${(props) =>
    props.background === 'vy-green'
      ? 'green'
      : props.background === 'vy-blue'
      ? 'blue'
      : !props.background
      ? 'palevioletred'
      : ''};
  height: 3em;
  width: 10em;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;

export const TestButton = styled.button`
  background-color: hotpink;
  height: 56px;
  width: 200px;
  color: gold;
  border-radius: 5px;
  border: none;

  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.secondary &&
    css`
      background-color: #fff;
      color: palevioletred;
      border: 2px solid palevioletred;
    `}

  ${(props) =>
    props.inactive &&
    css`
      background-color: #fff;
      color: lightgray;
      border: 2px solid lightgray;

      &:hover {
        cursor: not-allowed;
      }
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
      height: 70px;
      width: 300px;
    `}

  ${(props) =>
    props.small &&
    css`
      height: 40px;
      width: 100px;
    `}
`;
