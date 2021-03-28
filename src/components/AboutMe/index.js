import React from 'react';
import {AboutMeWrap, Wrap, AboutMeImage, Description,Headline } from './elements';
import ProfileDetail from '../../Images/AboutMe/profile_detail.svg';
import MainContainer from '../GlobalComponent/MainContainer';
// About Me Section
const AboutMe = ({ textData }) => {
    return (
        <MainContainer primary={false}id='aboutMe'>
            <AboutMeWrap>
                {/* Image Container */}
                <Wrap>
                    <AboutMeImage src={ProfileDetail}/>
                </Wrap>
                {/* About Me Text Container */}
                <Wrap>
                    <Headline>{textData.headline}</Headline>
                    <Description>{textData.description}</Description>
                </Wrap>
            </AboutMeWrap>
        </MainContainer>
    );
}

export default AboutMe;