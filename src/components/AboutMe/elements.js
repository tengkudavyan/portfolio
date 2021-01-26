import styled from 'styled-components';

// About Me Container
export const AboutMeContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    min-height:800px;
    background-color:#17252A;
`;

// Center Wrap
export const AboutMeWrap = styled.div`
    width:100%;
    max-width:1100px;
    display:flex;
    flex-direction:row;
    margin-left:75px;
    margin-right:25px;
    

    @media screen and (max-width:860px){
        flex-direction:column;
    }
`;

// Content Wrapper
export const Wrap = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

// Ilustration Image 
export const AboutMeImage = styled.img`
    margin-top:30px;
    width:75%;

    @media screen and (max-width:860px){
        width:75%;
    }
`;

// About Me Headline
export const Headline = styled.h1`
    color:#3AAFA9;
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
    margin-top:20px;
    color:#FEFFFF;
    font-weight:400;
    font-size:18px;
    margin-bottom:30px;
    padding:10px 10px 10px 0;

    @media screen and (max-width:1225px){
        padding:0 10px 0 10px;
    }
`;