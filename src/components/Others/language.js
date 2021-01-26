import React from 'react';
import {
    SectionContainer, SubHeadline, OthersContent, LanguageContainer,
    LanguageHeadline, LanguageLevel,LanguagePercent, Percent
} from './elements';

// Language Section
const Language = ({ textData }) => {
    return (
        <SectionContainer>
            <SubHeadline>{textData.headline}</SubHeadline>
            <OthersContent>
                {/* Language 1 */}
                <LanguageContainer>
                    <LanguageHeadline>{textData.language1.headline}</LanguageHeadline>
                    <LanguageLevel>{textData.language1.level}</LanguageLevel>
                    <LanguagePercent><Percent percentLevel={textData.language1.percent}/></LanguagePercent>
                </LanguageContainer>
                {/* Language 2 */}
                <LanguageContainer>
                    <LanguageHeadline>{textData.language2.headline}</LanguageHeadline>
                    <LanguageLevel>{textData.language2.level}</LanguageLevel>
                    <LanguagePercent><Percent percentLevel={textData.language2.percent}/></LanguagePercent>
                </LanguageContainer>
                {/* Language 3 */}
                <LanguageContainer>
                    <LanguageHeadline>{textData.language3.headline}</LanguageHeadline>
                    <LanguageLevel>{textData.language3.level}</LanguageLevel>
                    <LanguagePercent><Percent percentLevel={textData.language3.percent}/></LanguagePercent>
                </LanguageContainer>
            </OthersContent>
        </SectionContainer>    
    )
}

export default Language;