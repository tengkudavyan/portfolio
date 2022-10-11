import React from 'react';
import { Wrap, ContactInfoContainer, AppLogo, ContactInfo, Info,Hint } from './elements';

// Importing Image
import Email from '../../Images/ContactMe/email.png';
import Github from '../../Images/ContactMe/github.png';
import Linkedin from '../../Images/ContactMe/linkedin.png';

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
            {/* Github Contact Info */}
            <ContactInfoContainer onClick={() => window.open("https://github.com/tengkudavyan", "_blank")}>
                <AppLogo src={Github} />
                <ContactInfo>
                    <Info>{textData.github}</Info>
                </ContactInfo>
            </ContactInfoContainer>
            {/* LinkedIn Contact Info */}
            <ContactInfoContainer onClick={() => window.open("https://linkedin.com/in/tengkudavyan", "_blank")}>
                <AppLogo src={Linkedin} />
                <ContactInfo>
                    <Info>{textData.linkedin}</Info>
                </ContactInfo>
            </ContactInfoContainer>
        </Wrap>
    );
}

export default ContactList;