import styled from 'styled-components';
import { typography, space, layout, position, color } from 'styled-system';

const p = styled.p`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${position}
`;

const span = styled.span`
${space};
    ${layout}
    ${color}
    ${typography}
    ${position}
`;

const Text = {
    p,
    span,
};

export default Text;