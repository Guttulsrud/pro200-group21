import styled from 'styled-components';

export const IconBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  width: 54px;
  border-radius: 50px;
  background-color: ${(props) => (props.secondary ? '#00866E' : '#003A70')};
  color: #fff;
`;
