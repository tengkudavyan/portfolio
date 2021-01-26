import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ToggleContainer = styled(Link)`
    background-color:#FEFFFF;
    display:flex;
    flex-direction:row;
    border-radius:50px;
    text-decoration:none;
    
`;

export const LangContainer = styled.div`
    font-size:13px;
    background-color:${({ chooseTrue }) => (chooseTrue ? '#2B7A78' : 'transparent')};
    color:${({chooseTrue}) => (chooseTrue ? '#FEFFFF' : '#17252A')};
    font-weight:bold;
    padding:5px 8px;
    border-radius:50px;
    cursor:pointer;
    text-decoration:none;

    &:hover{
        opacity:${({ chooseTrue }) => (chooseTrue ? '100%' : '80%')};
        transform:scale(1.05);
    }
`;

