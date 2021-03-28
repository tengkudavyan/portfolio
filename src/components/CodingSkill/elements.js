import styled from 'styled-components';
import { primaryGreen, primaryBlack, softWhite } from '../GlobalComponent/Color'
import { FlexBox } from '../GlobalComponent/StylePackage';

// Coding Skill Wrapper
export const CodingSkillWrap = styled.div`
    ${FlexBox('column')}
    width:100%;
    max-width:1100px;
    align-items:center;
    margin-left:75px;
    margin-right:25px;
`;

// All Coding Category Wrapper
export const CodingCategoryWrapper = styled.div`
    ${FlexBox('row','center','center')};
    width:100%;
    flex-wrap:wrap;
    margin:30px 0;
`;

// Coding Category
export const CodingCategory = styled.div`
    ${FlexBox('column','center','center')}
    padding:20px 0;
    border-radius:20px;
    background-color:${primaryBlack};
    border-radius:20px;
    margin:20px;
`;



// Coding Category Sub Headline
export const SubHeadline = styled.h2`
    color:${softWhite};
    font-weight:600;
    font-size:28px;
`;

// Coding language Container
export const CodingLanguageContainer = styled.div`
    ${FlexBox('row','center')};
    flex-wrap:wrap;
    margin:10px 0 0 0;
`;

// Coding Language
export const CodingLanguage = styled.div`
    ${FlexBox('column','','center')};
    margin:15px 20px 0 20px;
    transition:200ms;
    position:relative;
    
    &:hover{
        transform:scale(1.12)
    }
`;

// Experience
export const Experience = styled.p`
    color:${softWhite};
    font-weight:700;
    font-size:12px;
    padding:5px;
    position:absolute;
    z-index:2;
    top:-10px;
    right:-15px;
    background-color:${primaryGreen};
    border-radius:5px;
`;

export const LanguageImage = styled.img`
    width:85px;
    background-color:${softWhite};
    padding:5px;
    border-radius:10px;
`;

export const LanguageName = styled.p`
    margin-top:10px;
    color:${softWhite};
    font-size:20px;
    text-align:center;
    font-weight:400;
`;
