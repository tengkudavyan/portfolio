import React from 'react';
import SkillSection from './SkillSection';
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
                    {textData.content.map(val => <SkillSection data={val} key={val.title}/>)}
                </CodingCategoryWrapper>
            </CodingSkillWrap>
        </MainContainer>
    );
}

export default CodingSkill;