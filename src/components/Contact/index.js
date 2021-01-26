import React from 'react';
import ContactList from './ContactList';
import {
    ContactContainer, ContactWrapper, Headline, ContentsWrap, Wrap,
    InputLabel, InputData, InputMessage, SendButton,
} from './elements';
    
// Contact Section
const Contact = ({ textData }) => {
    return (
        <ContactContainer id="contact">
            <ContactWrapper>
                <Headline>{textData.headline}</Headline>
                <ContentsWrap>
                    {/* Email Send Section */}
                    <Wrap>
                        {/* Name Input */}
                        <InputLabel>{textData.nameInput}</InputLabel>
                        <InputData type="text" placeholder={textData.namePlaceholder} />
                        {/* Email Input */}
                        <InputLabel>{textData.emailInput}</InputLabel>
                        <InputData type="email" placeholder={textData.emailPlaceholder} />
                        {/* Messages Input */}
                        <InputLabel>{textData.messageInput}</InputLabel>
                        <InputMessage></InputMessage>
                        {/* Send Button */}
                        <SendButton>{textData.sendButton}</SendButton>
                    </Wrap>
                    {/* Contact List Section */}
                    <ContactList textData={textData}/>
                </ContentsWrap>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact;