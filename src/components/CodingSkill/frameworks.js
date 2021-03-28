import React from 'react';
import { CodingCategory, SubHeadline, CodingLanguageContainer, CodingLanguage, LanguageImage, LanguageName,Experience } from './elements';
import ReactImage from '../../Images/CodingSkills/react.png';
import Django from '../../Images/CodingSkills/django.png';
import Vue from '../../Images/CodingSkills/vue.png';
import Dotnet from '../../Images/CodingSkills/dotnet.png';
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
                {/* Frameworks Vue JS */}
                <CodingLanguage>
                    <Experience>{textData.experience.vueJs}</Experience>
                    <LanguageImage src={Vue} />
                    <LanguageName> Vue JS</LanguageName>
                </CodingLanguage>
                {/* Frameworks .Net Core */}
                <CodingLanguage>
                    <Experience>{textData.experience.dotnet}</Experience>
                    <LanguageImage src={Dotnet} />
                    <LanguageName>.NET Core</LanguageName>
                </CodingLanguage>
            </CodingLanguageContainer>
        </CodingCategory>
    );
}

export default Frameworks;