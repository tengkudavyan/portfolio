import styled from 'styled-components';
import { primaryGreen, primaryBlack } from './Color';
// Main Container
const MainContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    min-height:${({ minHeight }) => minHeight ? null : '800px'};
    background-color:${({ primary }) => primary ? primaryGreen : primaryBlack};
`;

export default MainContainer;