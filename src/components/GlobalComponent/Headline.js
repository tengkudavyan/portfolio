import styled from 'styled-components';

// Headline Component
export const Headline = styled.h1`
    color:${({ primary }) => (primary ? '#3AAFA9' : '#17252A')};
    font-size:45px;
    font-weight:900;
    margin-top:30px;
    text-align:center;

    @media screen and (max-width:600px){
        font-size:40px;
    }
`;