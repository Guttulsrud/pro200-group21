import styled from 'styled-components';
import { typography, space, layout, position, color } from 'styled-system';

const p = styled.p`
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${position}
    transition: .2s linear;
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