import React from 'react';
import Toggle from '../Toggle';
import {
    HeroSectionWrap, Header, LogoText, Body, HalfWrap,
    SideImage, TextWrap, Introduction, Name, JobIntroduction, Job, LastWord, DownloadCvButton
} from './elements';
import MainContainer from '../GlobalComponent/MainContainer';
import CV from '../../Files/Tengku-Davyan-CV-English.pdf';
import Proud from '../../Images/HeroSection/proud_feeling.svg' 
import ReactGA from 'react-ga';

// Hero Section Container
const HeroSection = ({ textData, language }) => {
    const {introduction,name,jobIntroduction,job1,lastWord,download} = textData;
    return (
        <MainContainer primary={true} id='home'>
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
                            onClick={() => {ReactGA.event({ category: 'User', action: 'Download CV' })}}
                        >{download}</DownloadCvButton>

                    </HalfWrap>
                    {/* Ilustrations Image Wrap */}
                    <HalfWrap>
                        <SideImage src={Proud}/>
                    </HalfWrap>
                </Body>
            </HeroSectionWrap>
        </MainContainer>
    );
}

export default HeroSection;
