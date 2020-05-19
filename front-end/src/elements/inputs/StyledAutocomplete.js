import styled from 'styled-components';
import Autocomplete from 'react-google-autocomplete';

export const StyledAC = styled(Autocomplete)`
  flex-grow: 2;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 35px;
  margin-top: 30px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.3);
  width: ${(props) => (props.width ? props.width : '100%')};
  font-size: 1.3rem;
  outline: none;
  border: none;
  border-bottom: ${(props) =>
    props.filled ? '1px solid #00866E' : '1px solid #333'};

  &:focus {
    border-bottom: 1px solid #00866e;
    outline: none;
  }
`;