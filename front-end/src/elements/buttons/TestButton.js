import styled from 'styled-components';

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
  background-color: ${(props) =>
    props.primary
      ? 'green'
      : props.secondary
      ? 'blue'
      : props.inactive
      ? 'gray'
      : 'black'};
  height: 3em;
  width: 10em;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;
