import React from 'react';
import Toggle from '../Toggle';
import {
    HeroSectionContainer, HeroSectionWrap, Header, LogoText, Body, HalfWrap,
    SideImage, TextWrap, Introduction, Name, JobIntroduction, Job, LastWord, DownloadCvButton
} from './elements';
import CV from '../../Files/english-cv.pdf';
import proud from '../../Images/HeroSection/proud_feeling.svg' 
// Hero Section Container
const HeroSection = ({ textData, language }) => {
    return (
        <HeroSectionContainer id='home'>
            <HeroSectionWrap>
                <Header>
                    <LogoText>tengkudavyan</LogoText>
                    {/* Give different input and link to Toggle based of language */}
                    <Toggle
                        choice={language == 'eng' ? true : false}
                        linkTo={language == 'eng' ? '/jpn' : '/eng'}
                    />
                </Header>
                <Body> {/* HalfWrap is used to divide the body into 2 part in horizontal */}
                    {/* Text Introductio Wrap */}
                    <HalfWrap> 
                        <TextWrap>
                            <Introduction>{textData.introduction}</Introduction>
                            <Name>{textData.name}</Name>
                            <JobIntroduction>{textData.jobIntroduction}</JobIntroduction>
                            <Job>{textData.job1}</Job>
                            <LastWord>{textData.lastWord}</LastWord>
                        </TextWrap>
                        <DownloadCvButton 
                            href={CV}
                            download="Tengku Davyan Portfolio"
                        >{textData.download}</DownloadCvButton>
                    </HalfWrap>
                    {/* Ilustrations Image Wrap */}
                    <HalfWrap>
                        <SideImage src={proud}/>
                    </HalfWrap>
                </Body>
            </HeroSectionWrap>
        </HeroSectionContainer>
    );
}

export default HeroSection;
