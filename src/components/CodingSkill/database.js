import React from 'react';
import { CodingCategory, SubHeadline, CodingLanguageContainer, CodingLanguage, LanguageImage, LanguageName,Experience } from './elements';
import MySql from '../../Images/CodingSkills/mysql.png';
import Mongo from '../../Images/CodingSkills/mongodb.png';
// Coding Category Database
const Database = ({ textData }) => {
    return (
        <CodingCategory>
            <SubHeadline>{textData.database}</SubHeadline>
            <CodingLanguageContainer>
                {/* Database MySQL */}
                <CodingLanguage>
                    <Experience>{textData.experience.mysql}</Experience>
                    <LanguageImage src={MySql} />
                    <LanguageName>MySQL</LanguageName>
                </CodingLanguage>
                {/* Database MongoDB */}
                <CodingLanguage>
                    <Experience>{textData.experience.mongoDB}</Experience>
                    <LanguageImage src={Mongo} />
                    <LanguageName>MongoDB</LanguageName>
                </CodingLanguage>    
            </CodingLanguageContainer>
        </CodingCategory> 

    )
}

export default Database;