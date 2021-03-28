import styled from 'styled-components';
import { primaryGreen, primaryBlack } from './Color';
// Headline Component
const Headline = styled.h1`
    color:${({ primary }) => primary ? primaryGreen : primaryBlack};
    font-size:45px;
    font-weight:900;
    margin-top:30px;
    text-align:center;

    @media screen and (max-width:1225px){
        padding:0 10px 0 10px;
    }

    @media screen and (max-width:860px){
        font-size:40px;
    }

    @media screen and (max-width:500px){
        font-size:38px;
    }
`;

export default Headline;