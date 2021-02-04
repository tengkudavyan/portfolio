import React,{Component} from 'react';
import {
    DetailsContainer, DarkBackground, DetailsWrapper, Headline, Body, Wrap,
    ProjectImage, SubHeadline, Desc, LinkButton, LinkWrapper,CloseButton,ProjectScroll
} from './elements';
import { FaGithub } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';

// Importing Images
import Portfolio from '../../Images/Project/portfolio.png';
import ReChatting from '../../Images/Project/rechatting.png';
import dolla from '../../Images/Project/dolla.png';
import trvl from '../../Images/Project/trvl.png';

// Project Details Component
const ProjectDetails = ({detail}) => {
    return (
        // Mapping Detail Array
        detail.contents.map((content) =>
            <>
                {/* Get Detail Headline */}
                <SubHeadline>{content.subHeadline}</SubHeadline>
                {/* Mapping Detail Description */}
                {content.desc.map((description) =>
                    <Desc>{description}</Desc>
                )}
            </>
        )
    );
}

class Details extends Component{
    constructor(props){
        super(props);
        this.state = {
            containerDisplay: 'none',
            containerOpacity: '0%',
            images: {
                portfolio: Portfolio,
                rechatting: ReChatting,
                dolla: dolla,
                trvl:trvl
            }
        }
    }

    componentDidUpdate = prevProps => {
        if (prevProps.show !== this.props.show) {
            this.props.show ? this.showContainer() : this.closeContainer();
        }
    }


    // Function For Show / Popping The Details
    showContainer = () => {
        this.setState({ containerDisplay: 'flex' });
        setTimeout(() => { this.setState({ containerOpacity: '100%' }) }, 10);
    }
    
    // Function to Close Details Container
    closeContainer = () => {
        this.setState({ containerOpacity: '0%' });
        setTimeout(() => { this.setState({ containerDisplay: 'none' }) }, 200);
    }

    render() {
        const { containerDisplay, containerOpacity,images} = this.state;
        const { projectDetails,textData } = this.props;
        const {projectName,link,githubLink,details} = projectDetails;
        
        return (
            <DetailsContainer showDetails={containerDisplay} showOpacity={containerOpacity}>
                <DarkBackground/>
                <DetailsWrapper >
                    <ProjectScroll>
                        <CloseButton onClick={this.props.closeDetails}/>
                        <Headline>{projectName}</Headline>
                        <Body>
                            <Wrap center={false}>
                                {/* Call Project Details Component */}
                                <ProjectDetails detail={details}/>
                            </Wrap>
                            <Wrap center={true}>
                                <ProjectImage src={images[details.imageSrc]} />
                                {/* Link Wrapper */}
                                <LinkWrapper>
                                    {/* Github Source Code Link */}

                                    <LinkButton href={githubLink || ''} show={githubLink ? true : false} primary={true} target="_blank"><FaGithub />{textData.seeCode}</LinkButton>
                                    {/* Website Link */}
                                    <LinkButton href={link || ''} show={link ? true : false} primary={false} target="_blank"><BiWorld />{textData.visitWeb}</LinkButton>
                                </LinkWrapper>
                            </Wrap>
                            </Body>
                        </ProjectScroll>
                </DetailsWrapper>
                
            </DetailsContainer>
        )
    }
}

export default Details;