import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { primaryGreen, primaryBlack, softWhite } from '../GlobalComponent/Color'
import { FlexBox } from '../GlobalComponent/StylePackage';
// Details Container
export const DetailsContainer = styled.div`
    position:fixed;
    display:${props => props.showDetails};
    justify-content:center;
    top:0;
    opacity:${props => props.showOpacity};
    align-items:center;
    right:0;
    left:0;
    bottom:0;
    z-index:100;
    transition: opacity 500ms;
`;

// Dark Background
export const DarkBackground = styled.div`
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    z-index:99;
    opacity:50%;
    background-color:black;
`;

//Details Wrapper
export const DetailsWrapper = styled.div`
    position:relative;
    width:100%;
    max-width:800px;
    margin:0 25px 0 75px;
    z-index:1001;
    background:${primaryBlack};
    border-radius:20px;
    padding:20px;
    
    @media screen and (max-width:860px){
        max-height:90%;
    }
`;

// Close Button
export const CloseButton = styled(AiOutlineClose)`
    width:30px;
    height:30px;
    background-color:${softWhite};
    position:absolute;
    top:-5px;
    right:-5px;
    z-index:1002;
    color:black;
    font-weight:bold;
    border-radius:10px;
    transition:200ms;
    cursor:pointer;

    &:hover{
        transform:scale(1.2);
    }

    
`;
// Details Headline
export const Headline = styled.h1`
    width:100%;
    font-size:30px;
    text-align:center;
    color:${softWhite};
    font-weight:700;
`;

// Details Body : Dividing to 2 part
export const Body = styled.div`
    ${FlexBox('row')}
    width:100%;
    margin-top:30px;
    
    @media screen and (max-width:860px){
        flex-direction:column-reverse;

    }
`;

// Body Wrap
export const Wrap = styled.div`
    ${FlexBox('column')}
    flex:1;
    padding:10px 0;
    align-items:${({center}) => center ? 'center' : 'flex-start'};
    overflow:auto;
`;

export const ProjectScroll = styled.div`
    overflow-y:auto;
    height:100%;
    
`;
// Sub Headline
export const SubHeadline = styled.h2`
    font-size:20px;
    margin-bottom:10px;
    font-weight:bold;
    color:${softWhite};
    margin-top:20px;
`; 

// Description
export const Desc = styled.h3`
    font-size:13px;
    font-weight:400;
    color:${softWhite};
`;

// Project Image
export const ProjectImage = styled.img`
    width:75%;
    border-radius:15px;
`;

// Link Wrapper
export const LinkWrapper = styled.div`
    ${FlexBox('column','','center')}
    margin-top:20px;
    width:100%;
`;
// Link Button
export const LinkButton = styled.a`
    background-color:${({primary}) => primary ? primaryGreen: softWhite};
    color:${({primary}) => primary ? softWhite : primaryBlack};
    display:${({show}) => show ? 'block' : 'none'};
    width:60%;
    border-radius:15px;
    font-size:15px;
    margin:10px;
    text-align:center;
    font-weight:bold;
    padding:10px;
    text-decoration:none;
    cursor:pointer;
    transition:200ms;

    &:hover{
        transform:scale(1.1);
    }
`;