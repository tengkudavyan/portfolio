import React from 'react';
import { CodingCategory, SubHeadline, CodingLanguageContainer, CodingLanguage, LanguageImage, LanguageName,Experience } from './elements';
import Python from '../../Images/CodingSkills/python.png';
import JavaScript from '../../Images/CodingSkills/javascript.png';
import Java from '../../Images/CodingSkills/java.png';
import Php from '../../Images/CodingSkills/php.png';

// Coding Category Back End
const BackEnd = ({ textData }) => {
    return (
        <CodingCategory>
            <SubHeadline>{textData.backEnd}</SubHeadline>
            <CodingLanguageContainer>
                {/* Coding Langauge Python*/}
                <CodingLanguage>
                    <Experience>{textData.experience.python}</Experience>
                    <LanguageImage src={Python} />
                    <LanguageName>Python</LanguageName>
                </CodingLanguage>
                {/* Coding Langauge JavaScript */}
                <CodingLanguage>
                    <Experience>{textData.experience.javaScript}</Experience>
                    <LanguageImage src={JavaScript} />
                    <LanguageName>JavaScript</LanguageName>
                </CodingLanguage>
                {/* Coding Langauge Java*/}
                <CodingLanguage>
                    <Experience>{textData.experience.java}</Experience>
                    <LanguageImage src={Java} />
                    <LanguageName>Java</LanguageName>
                </CodingLanguage>
                {/* Coding Langauge PHP */}
                <CodingLanguage>
                    <Experience>{textData.experience.php}</Experience>
                    <LanguageImage src={Php} />
                    <LanguageName>PHP</LanguageName>
                </CodingLanguage>
            </CodingLanguageContainer>
        </CodingCategory>
    );
}

export default BackEnd;