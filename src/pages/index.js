import React, { Component} from 'react';
import HeroSection from '../components/HeroSection';
import Sidebar from '../components/Sidebar';
import AboutMe from '../components/AboutMe';
import CodingSkill from '../components/CodingSkill';
import Others from '../components/Others';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import { eng } from '../components/Language/eng';
import { jpn } from '../components/Language/jpn';
import ReactGA from 'react-ga';

// Index page
class Index extends Component{
    // Constructor
    constructor(props) {
        super(props);
        // Initiate State Variable and Get Variable Language from URL Parameter
        this.state = {
            getLanguage:props.match.params.language,
            language: eng
        }
    }

    // Auto Run Function When Starting Component
    componentDidMount() {
        // Get Language From State
        const { getLanguage } = this.state;

        // Choice Language from Route Parameter 
        if (getLanguage === undefined || getLanguage === 'eng') {
            this.setState({ language: eng, getLanguage: 'eng' });
            document.title = "Tengku Davyan | Portfolio";
            ReactGA.pageview("/eng",null,document.title);
        } else if(getLanguage === 'jpn' || getLanguage === 'jp') {
            this.setState({ language: jpn, getLanguage: 'jpn' });
            document.title = "Tengku Davyan | ポルトフォリオ";
            ReactGA.pageview("/jpn",null,document.title);
        } else {
            this.setState({ language: eng, getLanguage: 'eng' });
            document.title = "Tengku Davyan | Portfolio";
            ReactGA.pageview("/",null,document.title);
        }
    }

    // Update and Change Language When URL Changing
    componentDidUpdate(prevProps) {
        // If Newest Props Language Not Same To Oldest Props Language Then Update Language To The New Language
        if (this.props.match.params.language !== prevProps.match.params.language) {
            // Get New Language From Props
            let newLanguage = this.props.match.params.language;
            // Change State getLanguage Variable
            this.setState({ getLanguage: newLanguage }, () => {
                // Callback componentDidMount Function To Restart Language
                this.componentDidMount();
            });
        }
    }

    render() {
        // Get Variable From State
        let { language,getLanguage } = this.state;
        return (
            <>
                <Sidebar textData={language.sidebar}/>
                <HeroSection textData={language.heroSection} language={getLanguage}/>
                <AboutMe textData={language.aboutMe} />
                <CodingSkill textData={language.coding} />
                <Projects textData={language.projects}/>
                <Others textData={language.others} /> 
                <Contact textData={language.contactMe}/>
            </>
        )
    }
    
}

export default Index;