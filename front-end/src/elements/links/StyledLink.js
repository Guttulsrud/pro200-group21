import styled from "styled-components"
import {color, layout, position, space, typography} from "styled-system"
import {Link} from 'react-router-dom';

export const StyledLink = styled(Link)`
      ${space}
      ${position}
      ${layout}
      ${typography}
      ${color}
`;