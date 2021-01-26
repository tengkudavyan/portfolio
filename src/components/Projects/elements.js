import styled from 'styled-components';
import { Link } from 'react-scroll';
import { VscTriangleRight, VscTriangleLeft } from 'react-icons/vsc';
// Projects Container
export const ProjectsContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    min-height:800px;
    background-color:#17252A;
    overflow-x:hidden;
`;

// Projects Wrapper For Headline
export const ProjectsWrapper = styled.div`
    width:100%;
    max-width:1100px;
    display:flex;
    justify-self:flex-start;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    margin-left:75px;
    margin-right:25px;
`;

// Main Container
export const ProjectsMain = styled.div`
    display:flex;
    flex:1;
    width:100%;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

// Projects Info Wrapper
export const ProjectsWrapperInfo = styled.div`
    width:100%;
    max-width:1100px;
    display:flex;
    margin-top:20px;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    margin-left:75px;
    margin-right:25px;
`;

// Projects Thumbnail Wrapper
export const ProjectsThumbnailWrapper = styled.div`
    /* background-color:red; */
    display:flex;
    flex-direction:row;
    align-items:center;
    margin-bottom:20px;
    /* margin-left:744px; */
    padding:40px 0;
    transform:translateX(${({ marginWidth }) => (marginWidth)}px);
    transition:500ms;
    
`;

// Projects Headline
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

// Project Thumbnail
export const ProjectThumbnail = styled.img`
    width:336px;
    height:173px;
    border-radius:20px;
    margin-left:50px;
    margin-right:50px;
    transition:500ms;
    transform:${({ zoom }) => (zoom ? "scale(1.4)" : "scale(1)")};
    opacity:${({ zoom }) => (zoom ? "100%" : "90%")};

    @media screen and (max-width:600px){
        width:224px;
        height:115px;
        margin-left:40px;
        margin-right:40px;
    }
`;

// Control Button To Next 
export const NextButton = styled(VscTriangleRight)`
    width:80px;
    height:80px;
    color:#3B484D;
    transition:500ms;
    cursor:pointer;

    &:hover{
        color:#3AAFA9;
        transform:scale(1.2);
    }

    @media screen and (max-width:600px){
        width:60px;
        height:60px;
    }
`;

// Control Button To Previous
export const PrevButton = styled(VscTriangleLeft)`
    width:80px;
    height:80px;
    color:#3B484D;
    cursor:pointer;

    &:hover{
        color:#3AAFA9;
        transform:scale(1.2);
    }

    @media screen and (max-width:600px){
        width:60px;
        height:60px;
        
    }
`;

// Project Info Container
export const ProjectInfo = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    color:#FEFFFF;
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
    background-color:#3AAFA9;
    color:#FEFFFF;
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
    background-color:#FEFFFF;
    color:#17252A;
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