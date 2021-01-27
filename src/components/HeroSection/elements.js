// Importing necessary thing
import styled from 'styled-components';

// Most Outside Part Of HeroSection
export const HeroSectionContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    height:800px;
    background-color:#3AAFA9;
`;

// Wrap to keep component in 1100px
export const HeroSectionWrap = styled.div`
    width:100%;
    max-width:1100px;
    display:flex;
    flex-direction:column;
    margin-left:75px;
    margin-right:25px;

    /* @media screen and (max-width:1100px){
        margin:0 1px;
    } */
`;

// Header part of hero section
export const Header = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:15px 0;
    box-sizing:border-box;
`;

// Portfolio Logo
export const LogoText = styled.h1`
    color:#FEFFFF;
    font-size:25px;
    font-weight:bold;

    @media screen and (max-width:860px){
        font-size:20px;
    }
    
`;

// Body Part
export const Body = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    flex:1;

    @media screen and (max-width:860px){
        flex-direction:column;
    }

    @media screen and (max-width:500px){
        margin-top:25px;
    }
`;

// Make Wrap in to 2 part
export const HalfWrap = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

// Introduction Text Container
export const TextWrap = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:center;
`;

// Introduction Text
export const Introduction = styled.h2`
    color:#FEFFFF;
    font-size:25px;
    font-weight:500;
    margin-bottom:2px;

    @media screen and (max-width:1225px){
        font-size:20px;
    }

    @media screen and (max-width:860px){
        font-size:25px;
    }
    
`;

// Name Text
export const Name = styled.h1`
    color:#17252A;
    font-size:45px;
    font-weight:700;
    width:100%;
    margin-bottom:2px;

    @media screen and (max-width:1225px){
        font-size:38px;
    }
    
    @media screen and (max-width:860px){
        font-size:45px;
    }

    @media screen and (max-width:500px){
        font-size:40px;
    }   
`;

// Job Introduction Text
export const JobIntroduction = styled.h2`
    color:#FEFFFF;
    font-size:30px;
    font-weight:500;
    margin-bottom:2px;
    margin-right:10px;
    
    @media screen and (max-width:1225px){
        font-size:25px;
    }

    @media screen and (max-width:860px){
        font-size:30px;
    }
`;

// Job Text
export const Job = styled.h1`
    color:#17252A;
    font-size:40px;
    font-weight:700;
    margin-bottom:2px; 
    margin-right:10px;

    @media screen and (max-width:1100px){
        font-size:35px;
    }

    @media screen and (max-width:860px){
        font-size:35px;
    }
`;

// Last Word Text
export const LastWord = styled.h2`
    color:#FEFFFF;
    font-size:30px;
    font-weight:500;
    margin-bottom:2px;

    @media screen and (max-width:1100px){
        font-size:25px;
    }

    @media screen and (max-width:860px){
        font-size:30px;
    }
`;

export const DownloadCvButton = styled.a`
    background-color:#FEFFFF;
    color:#17252A;
    font-size:15px;
    margin-top:15px;
    display:flex;
    align-self:flex-start;
    font-weight:700;
    justify-content:center;
    padding:10px 25px;
    border-radius:50px;
    outline:0;
    border:0;
    transition:300ms;
    text-decoration:none;
    cursor:pointer;

    @media screen and (max-width:1100px){
        font-size:13px;
    }

    @media screen and (max-width:860px){
        font-size:15px;
    }

    &:hover{
        background-color:#EEEEEE;
        transform:scale(1.12);
    }
`;

export const SideImage = styled.img`
    width:70%;

    @media screen and (max-width:860px){
        width:70%;
    }

    @media screen and (max-width:500px){
        width:75%;
    }
`;

