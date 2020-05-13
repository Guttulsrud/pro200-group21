import styled from 'styled-components';

export const RoundBtn = styled.button`
  background-color: ${(props) => (props.primary ? '#003A70' : '#00866E')};
  height: 2em;
  width: 2em;
  color: white;
  border: none;
  border-radius: 50px;

  &:hover {
    cursor: pointer;
  }
`;
