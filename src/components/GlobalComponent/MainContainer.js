import styled from 'styled-components';

// Main Container
export const MainContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    min-height:800px;
    background-color:${({ primary }) => (primary ? '#3AAFA9' : '#17252A')};
`;
