import styled from 'styled-components';
import { space, color, layout, flex, border, typography, position } from 'styled-system';
import { mediaQueries } from '../../layout/theme';

export const Div = styled.div`
 ${space}
 ${color}
 ${border}
 ${layout}
 ${flex}
 ${typography}
 ${position}


 /* @media ${mediaQueries.small} {
     width: 300px;
     
 }

 @media ${mediaQueries.large} {
     width: 600px;
 }
 @media ${mediaQueries.xLarge} {
     width: 1000px;
 } */
`;
