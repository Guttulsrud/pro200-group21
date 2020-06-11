import styled from 'styled-components';

export const Card = styled.div.attrs(props => ({

    bcolor: props.bcolor || 'black',
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${props => (props.flexdir || 'row')};
  width: ${props => (props.width || '100%')};
  height: ${props => props.height};
  color: ${props => props.color};
  box-shadow: ${(props) => (props.shadow ? '0 2px 4px 0 rgba(0, 0, 0, 0.07)' : '')};
  border-bottom: ${(props) => (props.borderB ? '2px solid ' + props.bcolor : '')};
  border-top: ${(props) => (props.borderT ? '2px solid ' + props.bcolor : '')};
  background-color: ${props => (props.bg || '')};
  padding: ${props => (props.p || '1em')};
  margin: ${props => (props.m || '1em')};
  
`;
