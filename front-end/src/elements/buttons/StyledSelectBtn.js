import styled from 'styled-components';

export const SelectBtn = styled.button`
  background-color: ${(props) => (props.primary ? '#003A70' : '#00866E')};
  height: 3em;
  width: 10em;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;
