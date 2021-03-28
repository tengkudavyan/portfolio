import styled from 'styled-components';
import { primaryGreen,softWhite } from '../GlobalComponent/Color';
import { FlexBox} from '../GlobalComponent/StylePackage';

// Center Wrap
export const AboutMeWrap = styled.div`
    ${FlexBox('','row')}
    width:100%;
    max-width:1100px;
    margin:0 25px 0 75px;
    
    @media screen and (max-width:860px){
        flex-direction:column;
    }
`;

// Content Wrapper
export const Wrap = styled.div`
    ${FlexBox('column','center','center')}
    flex:1;
`;

// Ilustration Image 
export const AboutMeImage = styled.img`
    margin-top:30px;
    width:75%;
`;

// About Me Headline
export const Headline = styled.h1`
    color:${primaryGreen};
    font-weight:700;
    font-size:45px;
    align-self: flex-start;
    margin-top:30px;

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

// About Me Description
export const Description = styled.p`
    margin:20px 0 30px 0;
    color:${softWhite};
    font-weight:400;
    font-size:18px;
    padding:10px 10px 10px 0;

    @media screen and (max-width:1225px){
        padding:0 10px 0 10px;
    }
`;