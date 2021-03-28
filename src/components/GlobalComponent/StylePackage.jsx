import { css } from 'styled-components';

// FlexBox Function
export const FlexBox = (direction,justifyContent,alignItems) => css`
    display:flex;
    flex-direction:${direction};
    justify-content:${justifyContent};
    align-items:${alignItems};
`;

// Clean Text Function
export const CleanText = () => css`
    outline:none;
    border:none;
    text-decoration:none;
`;
