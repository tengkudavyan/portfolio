import React from 'react';
import History from './history';
import Language from './language';
import {OthersWrap, ContentsWrap } from './elements';
import MainContainer from '../GlobalComponent/MainContainer';
import Headline from '../GlobalComponent/Headline';
// Others Section
const Others = ({ textData }) => {
    return (
        <MainContainer primary={true} id="others">
            <OthersWrap>
                <Headline primary={false}>{textData.headline}</Headline>
                <ContentsWrap>
                    {/* History Section */}
                    <History textData={textData.history} />
                    {/* Language Section */}
                    <Language textData={textData.language}/>
                </ContentsWrap>
            </OthersWrap>
        </MainContainer>
    )
}

export default Others;