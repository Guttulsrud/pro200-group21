import styled from 'styled-components';

export const Input = styled.input`
  flex-grow: 2;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 35px;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 30px;
  width: ${(props) => (props.width ? props.width : '100%')};
  font-size: 1.3rem;
  outline: none;
  border: none;
  border-bottom: ${(props) =>
    props.filled ? '2px solid #00866E' : '2px solid #333'};

  &:focus {
    border-bottom: 2px solid #00866e;
    outline: none;
  }
`;
