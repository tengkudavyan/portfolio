import styled from 'styled-components';

// Contact Container
export const ContactContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    background-color:#17252A;
`;

// Contact Section Wrapper
export const ContactWrapper = styled.div`
    width:100%;
    max-width:1100px;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-left:75px;
    margin-right:25px;
`;

// Contact Section Headline
export const Headline = styled.h1`
    color:#3AAFA9;
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
    width:100%;
    display:flex;
    flex-direction:row;
    margin-top:30px;
    margin-bottom:30px;

    @media screen and (max-width:860px){
        flex-direction:column;
    }
`;

// Contact Wrap
export const Wrap = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    margin:20px 40px;
    padding:0 10px;
    align-items:flex-start;

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
    color:#FEFFFF;
    font-weight:700;
    display:block;

`;

// Contact Input Data
export const InputData = styled.input`
    margin-top:10px;
    margin-bottom:20px;
    font-size:15px;
    color:#FEFFFF;
    border:2px solid #FEFFFF;
    background-color:transparent;
    padding:10px 15px;
    outline:none;
    width:90%;
    border-radius:10px;
    display:block;
`;

// Contact Input Message
export const InputMessage = styled.textarea`
    margin-top:5px;
    font-size:15px;
    color:#FEFFFF;
    border:2px solid #FEFFFF;
    background-color:transparent;
    padding:10px 15px;
    width:90%;
    outline:none;
    border-radius:10px;
`;

// Contact Send Message Button
export const SendButton = styled.button`
    margin-top:20px;
    border:0;
    font-weight:700;
    color:#FEFFFF;
    font-size:15px;
    padding:10px 20px;
    border-radius:10px;
    background-color:#3AAFA9;
    cursor: pointer;
    transition:200ms;

    &:hover{
        transform:scale(1.1);
    }
`;

// Contact Info Container
export const ContactInfoContainer = styled.div`
    display:flex;
    margin:7px 10px;
    padding:7px 10px;
    flex-direction:row;
    color:#FEFFFF;
    transition:500ms;
    border-radius:10px;
    align-self:flex-start;
    margin-right:auto;
    cursor:pointer;

    @media screen and (max-width:860px){
        margin:14px 0;
    }

    &:hover{
        background:#FEFFFF;
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
    display:flex;
    justify-content:center;
    flex-direction:column;
    box-sizing:border-box;
    margin-left:20px;
`;

// Info
export const Info = styled.div`
    display:flex;
    align-items:center;
    font-size:15px;
    flex:1;
`;
