import React from 'react';
import { Wrap, ContactInfoContainer, AppLogo, ContactInfo, Info,Hint } from './elements';

// Importing Image
import Email from '../../Images/ContactMe/email.png';
import Whatsapp from '../../Images/ContactMe/whatsapp.png';
import Telegram from '../../Images/ContactMe/telegram.png';
import Github from '../../Images/ContactMe/github.png';
import Linkedin from '../../Images/ContactMe/linkedin.png';
import Line from '../../Images/ContactMe/line.png';

// Contact List Section
const ContactList = ({ textData }) => {
    return (
        <Wrap>
            <Hint>{textData.addHint}</Hint>
            {/* Email Contact Info */}
            <ContactInfoContainer alt="Click to Add My Contact" onClick={() => { document.execCommand('Copied') }}>
                <AppLogo src={Email} />
                <ContactInfo>
                    <Info>{textData.email}</Info>
                </ContactInfo>
            </ContactInfoContainer>
            {/* Whatsapp Contact Info */}
            <ContactInfoContainer onClick={() => window.open("https://wa.me/6281262342529", "_blank")}>
                <AppLogo src={Whatsapp} />
                <ContactInfo>
                    <Info>{textData.phoneNumber} {textData.phone}</Info>
                </ContactInfo>
            </ContactInfoContainer>
            {/* Telegram Contact Info */}
            <ContactInfoContainer onClick={() => window.open("https://t.me/tengkudavyan", "_blank")}>
                <AppLogo src={Telegram} />
                <ContactInfo>
                    <Info>{textData.phoneNumber} {textData.phone}</Info>
                    <Info>{textData.id} {textData.telegramId}</Info>
                </ContactInfo>
            </ContactInfoContainer>
            {/* Github Contact Info */}
            <ContactInfoContainer onClick={() => window.open("https://github.com/tengkudavyan", "_blank")}>
                <AppLogo src={Github} />
                <ContactInfo>
                    <Info>{textData.github}</Info>
                </ContactInfo>
            </ContactInfoContainer>

            {/* LinkedIn Contact Info */}
            <ContactInfoContainer onClick={() => window.open("https://linkedin.com/in/tengku-davyan-034815193", "_blank")}>
                <AppLogo src={Linkedin} />
                <ContactInfo>
                    <Info>{textData.linkedin}</Info>
                </ContactInfo>
            </ContactInfoContainer>

            {/* Line Contact Info */}
            <ContactInfoContainer onClick={() => window.open("http://line.me/ti/p/tengku.davyan17", "_blank")}>
                <AppLogo src={Line} />
                <ContactInfo>
                    <Info>{textData.phoneNumber} {textData.phone}</Info>
                    <Info>{textData.id} {textData.lineId}</Info>
                </ContactInfo>
            </ContactInfoContainer>
        </Wrap>
    );
}

export default ContactList;