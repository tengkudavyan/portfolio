import React from 'react';
import FrontEnd from './frontend';
import BackEnd from './backend';
import Frameworks from './frameworks';
import Database from './database';
import { CodingSkillWrap, CodingCategoryWrapper} from './elements';
import  Headline  from '../GlobalComponent/Headline';
import MainContainer from '../GlobalComponent/MainContainer';
// Coding Skill Section
const CodingSkill = ({ textData }) => {
    return (
        <MainContainer primary={true} id='codingSkill'>
            <CodingSkillWrap>
                <Headline primary={false}>{textData.headline}</Headline>
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
        </MainContainer>
    );
}

export default CodingSkill;