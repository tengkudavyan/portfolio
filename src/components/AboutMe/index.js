import React from 'react';
import { AboutMeContainer, AboutMeWrap, Wrap, AboutMeImage, Headline, Description } from './elements';
import ProfileDetail from '../../Images/AboutMe/profile_detail.svg';
// About Me Section
const AboutMe = ({ textData }) => {
    return (
        <AboutMeContainer id='aboutMe'>
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
        </AboutMeContainer>
    );
}

export default AboutMe;