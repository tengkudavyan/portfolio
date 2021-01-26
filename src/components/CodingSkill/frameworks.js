import React from 'react';
import { CodingCategory, SubHeadline, CodingLanguageContainer, CodingLanguage, LanguageImage, LanguageName,Experience } from './elements';
import ReactImage from '../../Images/CodingSkills/react.png';
import Django from '../../Images/CodingSkills/django.png';
// Coding Category Framework
const Frameworks = ({ textData }) => {
    return (
        <CodingCategory>
            <SubHeadline>{textData.frameworks}</SubHeadline>
            <CodingLanguageContainer>
                {/* Frameworks React Js */}
                <CodingLanguage>
                    <Experience>{textData.experience.reactJs}</Experience>
                    <LanguageImage src={ReactImage} />
                    <LanguageName>React JS</LanguageName>
                </CodingLanguage>
                {/* Frameworks Django */}
                <CodingLanguage>
                    <Experience>{textData.experience.django}</Experience>
                    <LanguageImage src={Django} />
                    <LanguageName>Django</LanguageName>
                </CodingLanguage>
                {/* Frameworks React Native */}
                <CodingLanguage>
                    <Experience>{textData.experience.reactNative}</Experience>
                    <LanguageImage src={ReactImage} />
                    <LanguageName>React<br />Native</LanguageName>
                </CodingLanguage>
            </CodingLanguageContainer>
        </CodingCategory>
    );
}

export default Frameworks;