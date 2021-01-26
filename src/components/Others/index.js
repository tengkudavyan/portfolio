import React from 'react';
import History from './history';
import Language from './language';
import { OthersContainer, OthersWrap, Headline, ContentsWrap } from './elements';

// Others Section
const Others = ({ textData }) => {
    return (
        <OthersContainer id="others">
            <OthersWrap>
                <Headline>{textData.headline}</Headline>
                <ContentsWrap>
                    {/* History Section */}
                    <History textData={textData.history} />
                    {/* Language Section */}
                    <Language textData={textData.language}/>
                </ContentsWrap>
            </OthersWrap>
        </OthersContainer>
    )
}

export default Others;