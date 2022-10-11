import React from 'react';
import {
    SectionContainer, SubHeadline, OthersContent, HistoryContainer, GreenDot, HistoryText,
    HistoryHeadline, HistorySubHeadline, HistoryPlaceTime, ScrollLine, GreenDotContainer
} from './elements';

// History Section
const History = ({ textData }) => {

    return (
        <SectionContainer>
            <SubHeadline>{textData.headline}</SubHeadline>
            <OthersContent>
                <ScrollLine/>
                {textData.contents.map((val,i) => 
                <HistoryContainer key={i}>
                    <GreenDotContainer>
                        <GreenDot />
                    </GreenDotContainer>
                    <HistoryText>
                        <HistoryHeadline>{val.headline}</HistoryHeadline>
                        <HistorySubHeadline>{val.subHeadline.map(sub => `- ${sub}\n`)}</HistorySubHeadline>
                        <HistoryPlaceTime>{val.timePlace}</HistoryPlaceTime>
                    </HistoryText>
                    </HistoryContainer>
                    )}
            </OthersContent>
        </SectionContainer>
    )
}

export default History;