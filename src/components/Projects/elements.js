import styled,{css} from 'styled-components';
import { VscTriangleRight, VscTriangleLeft } from 'react-icons/vsc';
import { primaryGreen, primaryBlack, softWhite, softGray } from '../GlobalComponent/Color'
import { FlexBox} from '../GlobalComponent/StylePackage';

// Projects Container
export const ProjectsContainer = styled.div`
    ${FlexBox('column','','center')}
    width:100%;
    min-height:800px;
    background-color:${primaryBlack};
    overflow-x:hidden;
`;

// Projects Wrapper For Headline
export const ProjectsWrapper = styled.div`
    ${FlexBox('row','center','center')}
    width:100%;
    max-width:1100px;
    margin:0 25px 0 75px;
`;

// Main Container
export const ProjectsMain = styled.div`
    ${FlexBox('column','center','center')}
    flex:1;
    width:100%;
`;

// Projects Info Wrapper
export const ProjectsWrapperInfo = styled.div`
    ${FlexBox('row','center','center')}
    width:100%;
    max-width:1100px;
    margin-top:20px;
    margin:0 25px 0 75px;
`;

// Projects Thumbnail Wrapper
export const ProjectsThumbnailWrapper = styled.div`
    ${FlexBox('row','','center')}
    margin-bottom:20px;
    padding:40px 0;
    transform:translateX(${({ marginWidth }) => marginWidth}px);
    transition:500ms;
`;


// Project Thumbnail
export const ProjectThumbnail = styled.img`
    width:336px;
    height:173px;
    border-radius:20px;
    margin:0 50px;
    transition:500ms;
    transform:${({ zoom }) => zoom ? "scale(1.4)" : "scale(1)"};
    opacity:${({ zoom }) => zoom ? "100%" : "90%"};
    
    @media screen and (max-width:600px){
        width:224px;
        height:115px;
        margin:0 40px;
    }
`;

const ControlButton = css`
    width:80px;
    height:80px;
    color:${softGray};
    transition:500ms;
    cursor:pointer;

    &:hover{
        color:${primaryGreen};
        transform:scale(1.2);
    }

    @media screen and (max-width:600px){
        width:60px;
        height:60px;
    }
`;

// Control Button To Next 
export const NextButton = styled(VscTriangleRight)`
    ${ControlButton}
`;

// Control Button To Previous
export const PrevButton = styled(VscTriangleLeft)`
    ${ControlButton}
`;

// Project Info Container
export const ProjectInfo = styled.div`
    ${FlexBox('column','','center')}
    color:${softWhite};
`;

// Project Name
export const ProjectName = styled.h1`
    font-weight:700;
    font-size:30px;
`;

// Project Desc
export const ProjectDesc = styled.p`
    margin-top:15px;
    font-weight:400;
    font-size:15px;
    text-align:center;
    max-width:350px;
    min-width:300px;
    max-height:92px;

    @media screen and (max-width:600px){
        max-width:250px;
        min-width:250px;
        font-size:13px;
    }
`;

// Visit Button
export const VisitButton = styled.a`
    background-color:${primaryGreen};
    opacity:${({showLink}) => showLink ? '100%' : '75%'};
    color:${softWhite};
    pointer-events:${({showLink}) => showLink ? 'auto' : 'none'};
    border-radius:10px;
    font-size:13px;
    font-weight:700;
    padding:10px 15px;
    margin:30px 20px;
    transition:200ms;
    cursor:pointer;
    text-decoration:none;

    &:hover{
        transform:scale(1.2);
    }
`;

// Detail Button
export const DetailButton = styled.a`
    background-color:${softWhite};
    color:${primaryBlack};
    border-radius:10px;
    font-size:13px;
    font-weight:700;
    padding:10px 20px;
    margin:30px 20px;
    transition:200ms;
    cursor:pointer;

    &:hover{
        transform:scale(1.2);
    }
`;