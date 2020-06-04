import styled from "styled-components"
import  {space, position, layout, typography, color} from "styled-system"
import {Link} from 'react-router-dom';

export const StyledLink = styled(Link)`
      ${space}
      ${position}
      ${layout}
      ${typography}
      ${color}
`;