import React from 'react';
import { CodingCategory, SubHeadline, CodingLanguageContainer, CodingLanguage, LanguageImage, LanguageName,Experience } from './elements';
import HTML from '../../Images/CodingSkills/html5.png';
import CSS from '../../Images/CodingSkills/css.png';
// Coding Category Front End
const FrontEnd = ({ textData }) => {
    return (
         <CodingCategory>
            <SubHeadline>{textData.frontEnd}</SubHeadline>
            <CodingLanguageContainer>
                {/* Coding Langauge HTML5 */}
                <CodingLanguage>
                    <Experience>{textData.experience.html}</Experience>
                    <LanguageImage src={HTML} />
                    <LanguageName>HTML 5</LanguageName>
                </CodingLanguage>
                {/* Coding Langauge CSS */}
                <CodingLanguage>
                    <Experience>{textData.experience.css}</Experience>
                    <LanguageImage src={CSS} />
                    <LanguageName>CSS</LanguageName>
                </CodingLanguage>
            </CodingLanguageContainer>
        </CodingCategory>
     
    )
}

export default FrontEnd;