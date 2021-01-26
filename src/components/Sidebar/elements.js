import styled from 'styled-components';
import { Link } from 'react-scroll';

export const SidebarContainer = styled.nav`
    position:fixed;
    z-index:999;
    left:20px;
    top:50%;
    transform: translate(0%, -50%);
    margin:auto;
    border-radius:11px;
    background-color:#17252A;
    display:flex;
    flex-direction:column;
    transition:300ms;
    width:${({ open }) => (open ? '179px' : '51px')};
   
    @media screen and (max-width:1225px){
        font-size:15px;
        left:15px;
        width:${({ open }) => (open ? '140px' : '37px')};
    }
    
`;

export const LinkItem = styled(Link)`
    padding:10px 15px;
    display:flex;
    border-radius:12px;
    flex-direction:row;
    align-items:center;
    transition:200ms;
    color:#FEFFFF;
    cursor:pointer;

    @media screen and (max-width:1250px){
        padding:5px 10px;
    }

    &:hover{
        background-color:#FEFFFF;
        color:#17252A;
        transform:scale(1.12);
    }
`;

export const Icon = styled.div`
    font-size:20px;
    padding-top:2px;
    padding-bottom:2px;

    @media screen and (max-width:1225px){
        font-size:17px;
    }
`;

export const Text = styled.h3`
    font-size:18px;
    font-weight:400;
    padding-left:16px;
    transition:200ms;
    display:${({ displayText }) => (displayText ? 'block' : 'none')};
    opacity:${({ open }) => (open ? '100%' : '0%')};

    @media screen and (max-width:1250px){
        padding-left:11px;
        font-size:14px;
    }
    
`;

