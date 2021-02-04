import React,{Component} from 'react';
import ContactList from './ContactList';
import {
    ContactContainer, ContactWrapper, Headline, ContentsWrap, Wrap,
    InputLabel, InputData, InputMessage, SendButton,SendSuccess,Copyright
} from './elements';
import emailjs from 'emailjs-com';
    
// Contact Section
class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            alertShow:false
        }
    }

    // Send Email Function 
    sendEmail = () => {
        const { name, email, message } = this.state;
        // Use Email Js API To Sending Email
        emailjs.send("service_vijwyh6", "template_70kzakl", {
            from_name: name,
            from_email: email,
            message: message,
        }, 'user_2wDiNbod5Sdpvv2OmttvZ').then((result) => {
            // If Succesful
            this.setState({ name: "", email: "", message: "",alertShow:true });
        }, (error) => {
                console.log(error.text);
                console.log("error");
        });
    }
    
    render() {
        const { textData } = this.props;
        const { name, email, message,alertShow} = this.state;
        return (
            <ContactContainer id="contact">
                <ContactWrapper>
                    <Headline>{textData.headline}</Headline>
                    <ContentsWrap>
                        {/* Email Send Section */}
                        <Wrap>
                            {/* Name Input */}
                            <InputLabel>{textData.nameInput}</InputLabel>
                            <InputData type="text" placeholder={textData.namePlaceholder} value={name} onChange={(e) => {this.setState({ name: e.target.value })}}/>
                            {/* Email Input */}
                            <InputLabel>{textData.emailInput}</InputLabel>
                            <InputData type="email" placeholder={textData.emailPlaceholder} value={email} onChange={(e) => { this.setState({ email: e.target.value })}}/>
                            {/* Messages Input */}
                            <InputLabel>{textData.messageInput}</InputLabel>
                            <InputMessage value={message} onChange={(e) => { this.setState({ message: e.target.value }) }} />
                            {/* Success Alert */}
                            <SendSuccess show={alertShow}>{textData.sendSuccess}</SendSuccess>
                            {/* Send Button */}
                            <SendButton onClick={(this.sendEmail)}>{textData.sendButton}</SendButton>     
                        </Wrap>
                        {/* Contact List Section */}
                        <ContactList textData={textData} />
                    </ContentsWrap>
                    <Copyright>tengkudavyan © 2021 All Rights Reserved</Copyright>
                </ContactWrapper>
            </ContactContainer>
        )
    }
}

export default Contact;