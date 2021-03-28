import styled from 'styled-components';
import { primaryGreen,softWhite } from '../GlobalComponent/Color';
import { FlexBox, CleanText } from '../GlobalComponent/StylePackage';

// Contact Section Wrapper
export const ContactWrapper = styled.div`
    ${FlexBox('column','','center')}
    width:100%;
    max-width:1100px;
    margin:0 25px 0 75px;
`;

// Contact Section Headline
export const Headline = styled.h1`
    color:${primaryGreen};
    font-size:45px;
    font-weight:900;
    margin-top:30px;
    text-align:center;

    @media screen and (max-width:600px){
        font-size:40px;
    }
`;

// Contents Wrapper
export const ContentsWrap = styled.div`
    ${FlexBox('row')}
    width:100%;
    margin:30px 0;

    @media screen and (max-width:860px){
        flex-direction:column;
    }
`;

// Contact Wrap
export const Wrap = styled.div`
    ${FlexBox('column','','flex-start')}
    flex:1;
    margin:20px 40px;
    padding:0 10px;

    @media screen and (max-width:1225px){
        margin:20px 20px;
    }

    @media screen and (max-width:500px){
        margin:20px 0 ;
    }

`;


// Contact Input Label
export const InputLabel = styled.label`
    font-size:13px;
    color:${softWhite};
    font-weight:700;
    display:block;

`;

// Contact Input Data
export const InputData = styled.input`
    margin-top:10px;
    margin-bottom:20px;
    font-size:15px;
    color:${softWhite};
    border:2px solid ${softWhite};
    background-color:transparent;
    padding:10px 15px;
    outline:none;
    width:90%;
    border-radius:10px;
    display:block;
`;

// Contact Input Message
export const InputMessage = styled.textarea`
    ${CleanText}
    margin-top:10px;
    font-size:15px;
    flex:1;
    color:${softWhite};
    border:2px solid ${softWhite};
    background-color:transparent;
    padding:10px 15px;
    width:90%;
    border-radius:10px;
`;

// Contact Send Message Button
export const SendButton = styled.button`
    margin-top:20px;
    border:0;
    font-weight:700;
    color:${softWhite};
    font-size:15px;
    padding:10px 20px;
    border-radius:10px;
    background-color:#3AAFA9;
    cursor: pointer;
    transition:200ms;
    ${CleanText}

    &:hover{
        transform:scale(1.1);
    }
`;

// Send Message Success
export const SendSuccess = styled.h2`
    color:${softWhite};
    padding:${props => props.show ? '15px 15px' : '0px 15px'};
    width:90%;
    background-color:#4BB543;
    border-radius:10px;
    transition:500ms;
    margin-top:${props => props.show ? '15px' : '0px'};
    font-size:13px;
    overflow:hidden;
    height:${props => props.show ? 'auto' : '0'};
`;

// Hint 
export const Hint = styled.p`
    color:${softWhite};
    font-size:15px;
    margin:10px 0;
    font-weight:bold;
    padding: 0 10px;
`;

// Contact Info Container
export const ContactInfoContainer = styled.div`
    ${FlexBox('row')}
    margin:7px 10px;
    padding:7px 10px;
    color:${softWhite};
    transition:500ms;
    border-radius:10px;
    align-self:flex-start;
    margin-right:auto;
    cursor:pointer;

    @media screen and (max-width:860px){
        margin:14px 0;
    }

    &:hover{
        background:${softWhite};
        color:#17252A;
        transform:scale(1.05);
    }
`;

// App Logo
export const AppLogo = styled.img`
    width:40px;
    height:40px;
`;

// Contact Info
export const ContactInfo = styled.div`
    ${FlexBox('column','center')}
    box-sizing:border-box;
    margin-left:20px;
`;

// Info
export const Info = styled.div`
    ${FlexBox('','','center')}
    font-size:15px;
    flex:1;
`;

// Copyright
export const Copyright = styled.small`
    font-size:15px;
    margin:10px 0 30px 0 ;
    color:${softWhite};
`;