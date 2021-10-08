// Importing necessary thing
import styled from 'styled-components';
import { primaryBlack, softWhite } from '../GlobalComponent/Color';
import { FlexBox, CleanText } from '../GlobalComponent/StylePackage';

// Wrap to keep component in 1100px
export const HeroSectionWrap = styled.div`
    width:100%;
    max-width:1100px;
    display:flex;
    ${FlexBox('column','center')}
    margin-left:75px;
    margin-right:25px;
    margin-bottom:20px;
`;

// Header part of hero section
export const Header = styled.div`
    width:100%;
    ${FlexBox('row','space-between','center')}
    padding:15px 0;
    box-sizing:border-box;
`;

// Portfolio Logo
export const LogoText = styled.h1`
    color:${softWhite};
    font-size:25px;
    font-weight:bold;

    @media screen and (max-width:860px){
        font-size:20px;
    }
    
`;

// Body Part
export const Body = styled.div`
    ${FlexBox('row')}
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
    ${FlexBox('column','center','center')}
    flex:1;
`;

// Introduction Text Container
export const TextWrap = styled.div`
    width:100%;
    ${FlexBox('row','','align-items')}
    flex-wrap:wrap;
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
        font-size:20px;
    }
    
`;

// Name Text
export const Name = styled.h1`
    color:${primaryBlack};
    font-size:45px;
    font-weight:700;
    width:100%;
    margin-bottom:2px;

    @media screen and (max-width:1225px){
        font-size:38px;
    }
    
    @media screen and (max-width:860px){
        font-size:42px;
    }

    @media screen and (max-width:600px){
        font-size:35px;
    }   
`;

// Job Introduction Text
export const JobIntroduction = styled.h2`
    color:${softWhite};
    font-size:30px;
    font-weight:500;
    margin-bottom:2px;
    margin-right:10px;
    
    @media screen and (max-width:1225px){
        font-size:25px;
    }

    @media screen and (max-width:860px){
        font-size:20px;
    }

   
`;

// Job Text
export const Job = styled.h1`
    color:${primaryBlack};
    font-size:40px;
    font-weight:700;
    margin-bottom:2px; 
    margin-right:10px;

    @media screen and (max-width:1100px){
        font-size:35px;
    }

    @media screen and (max-width:860px){
        font-size:25px;
    }
`;

// Last Word Text
export const LastWord = styled.h2`
    color:${softWhite};
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
    ${FlexBox('','center')}
    align-self:flex-start;
    background-color:${softWhite};
    color:${primaryBlack};
    font-size:15px;
    font-weight:700;
    margin-top:15px;
    padding:10px 25px;
    border-radius:50px;
    transition:300ms;
    cursor:pointer;
    ${CleanText}

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

