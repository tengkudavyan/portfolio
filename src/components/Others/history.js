import React from 'react';
import {
    SectionContainer, SubHeadline, OthersContent, HistoryContainer, GreenDot, HistoryText,
    HistoryHeadline, HistorySubHeadline, HistoryPlaceTime, ScrollLine, GreenDotContainer
} from './elements';

// History Sectin
const History = ({ textData }) => {

    return (
        <SectionContainer>
            <SubHeadline>{textData.headline}</SubHeadline>
            <OthersContent>
                <ScrollLine/>
                {/* First History */}
                <HistoryContainer>
                    <GreenDotContainer>
                        <GreenDot />
                    </GreenDotContainer>
                    <HistoryText>
                        <HistoryHeadline>{textData.history1.headline}</HistoryHeadline>
                        <HistorySubHeadline>{textData.history1.subHeadline}</HistorySubHeadline>
                        <HistoryPlaceTime>{textData.history1.timePlace}</HistoryPlaceTime>
                    </HistoryText>
                </HistoryContainer>
                {/* Second History */}
                <HistoryContainer>
                    <GreenDot />
                    <HistoryText>
                        <HistoryHeadline>{textData.history2.headline}</HistoryHeadline>
                        <HistorySubHeadline>{textData.history2.subHeadline}</HistorySubHeadline>
                        <HistoryPlaceTime>{textData.history2.timePlace}</HistoryPlaceTime>
                    </HistoryText>
                </HistoryContainer>
            </OthersContent>
        </SectionContainer>
    )
}

export default History;