import React from 'react';
import { CodingCategory, SubHeadline, CodingLanguageContainer, CodingLanguage, LanguageImage, LanguageName,Experience } from './elements';
// Skill Section
const SkillSection = ({ data }) => {
    return (
         <CodingCategory>
            <SubHeadline>{data.title}</SubHeadline>
            <CodingLanguageContainer>
                {data.skills.map(val => {
                    return (
                        <CodingLanguage key={val.name}>
                            {/* <Experience>{val.year}</Experience> */}
                            <LanguageImage src={require(`../../Images/CodingSkills/${val.img}`).default}/>
                            <LanguageName>{val.name}</LanguageName>
                        </CodingLanguage>
                   )
                })}
                
            </CodingLanguageContainer>
        </CodingCategory>
     
    )
}

export default SkillSection;