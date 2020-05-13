import styled from 'styled-components';

export const Input = styled.input`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  width: 315px;
  font-size: 1.3rem;
  outline: none;
  border: none;
  border-bottom: ${(props) =>
    props.filled ? '2px solid #00866E' : '2px solid #333'};

  &:focus {
    border-bottom: 2px solid #00866e;
  }
`;
