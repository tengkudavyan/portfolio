import styled from 'styled-components';

// Coding Skill Container
export const CodingSkillContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    min-height:800px;
    background-color:#3AAFA9;
`;

// Coding Skill Wrapper
export const CodingSkillWrap = styled.div`
    width:100%;
    max-width:1100px;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-left:75px;
    margin-right:25px;
`;

// Coding Section Headline
export const Headline = styled.h1`
    color:#17252A;
    font-size:45px;
    font-weight:900;
    margin-top:30px;
    text-align:center;

    @media screen and (max-width:600px){
        font-size:40px;
    }
`;

// All Coding Category Wrapper
export const CodingCategoryWrapper = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    margin-top:30px;
    margin-bottom:30px;
    
`;

// Coding Category
export const CodingCategory = styled.div`
    display:flex;
    flex-direction:column;
    padding:20px 0;
    align-items:center;
    border-radius:20px;
    background-color:#17252A;
    border-radius:20px;
    margin:20px;
`;



// Coding Category Sub Headline
export const SubHeadline = styled.h2`
    color:#FEFFFF;
    font-weight:600;
    font-size:28px;
`;

// Coding language Container
export const CodingLanguageContainer = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    margin:10px 0 0 0;
`;

// Coding Language
export const CodingLanguage = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:15px 20px 0 20px;
    transition:200ms;
    position:relative;
    
    &:hover{
        transform:scale(1.12)
    }
`;

// Experience
export const Experience = styled.p`
    color:#FEFFFF;
    font-weight:700;
    font-size:12px;
    padding:5px;
    position:absolute;
    z-index:2;
    top:-10px;
    right:-15px;
    background-color:#3AAFA9;
    border-radius:5px;
`;

export const LanguageImage = styled.img`
    width:85px;
    height:85px;
    background-color:#FEFFFF;
    padding:5px;
    border-radius:10px;
`;

export const LanguageName = styled.p`
    margin-top:10px;
    color:#FEFFFF;
    font-size:20px;
    text-align:center;
    font-weight:400;
`;
