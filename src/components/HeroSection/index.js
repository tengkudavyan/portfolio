import React from 'react';
import Toggle from '../Toggle';
import {
    HeroSectionContainer, HeroSectionWrap, Header, LogoText, Body, HalfWrap,
    SideImage, TextWrap, Introduction, Name, JobIntroduction, Job, LastWord, DownloadCvButton
} from './elements';
import CV from '../../Files/english-cv.pdf';
import Proud from '../../Images/HeroSection/proud_feeling.svg' 
// Hero Section Container
const HeroSection = ({ textData, language }) => {
    const {introduction,name,jobIntroduction,job1,lastWord,download} = textData;
    return (
        <HeroSectionContainer id='home'>
            <HeroSectionWrap>
                <Header>
                    <LogoText>tengkudavyan</LogoText>
                    {/* Give different input and link to Toggle based of language */}
                    <Toggle
                        choice={language === 'eng' ? true : false}
                        linkTo={language === 'eng' ? '/jpn' : '/eng'}
                    />
                </Header>
                <Body> {/* HalfWrap is used to divide the body into 2 part in horizontal */}
                    {/* Text Introductio Wrap */}
                    <HalfWrap> 
                        <TextWrap>
                            <Introduction>{introduction}</Introduction>
                            <Name>{name}</Name>
                            <JobIntroduction>{jobIntroduction}</JobIntroduction>
                            <Job>{job1}</Job>
                            <LastWord>{lastWord}</LastWord>
                        </TextWrap>
                        <DownloadCvButton 
                            href={CV}
                            download="Tengku Davyan Portolio"
                        >{download}</DownloadCvButton>

                    </HalfWrap>
                    {/* Ilustrations Image Wrap */}
                    <HalfWrap>
                        <SideImage src={Proud}/>
                    </HalfWrap>
                </Body>
            </HeroSectionWrap>
        </HeroSectionContainer>
    );
}

export default HeroSection;
