import React from 'react';
import FrontEnd from './frontend';
import BackEnd from './backend';
import Frameworks from './frameworks';
import Database from './database';
import { CodingSkillContainer, CodingSkillWrap, Headline, CodingCategoryWrapper} from './elements';

// Coding Skill Section
const CodingSkill = ({ textData }) => {
    return (
        <CodingSkillContainer id='codingSkill'>
            <CodingSkillWrap>
                <Headline>{textData.headline}</Headline>
                <CodingCategoryWrapper>
                    {/* Front End Category */}
                    <FrontEnd textData={textData}/>
                    {/* Back End Category */}
                    <BackEnd textData={textData}/>
                    {/* Frameworks Category */}
                    <Frameworks textData={textData}/>
                    {/* Database Category */}
                    <Database textData={textData}/>
                </CodingCategoryWrapper>
            </CodingSkillWrap>
        </CodingSkillContainer>
    )
}

export default CodingSkill;