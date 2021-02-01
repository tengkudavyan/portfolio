import React, { Component } from 'react';
import Details from '../Details';
import {
    ProjectsContainer, ProjectsWrapper, Headline, ProjectsThumbnailWrapper, ProjectThumbnail,
    NextButton, PrevButton, ProjectInfo, ProjectName, ProjectDesc, ProjectsWrapperInfo, ProjectsMain,
    VisitButton, DetailButton
} from './elements';

// Importing Images
import Portfolio from '../../Images/Project/portfolio.png';
import ReChatting from '../../Images/Project/rechatting.png';
import dolla from '../../Images/Project/dolla.png';
import trvl from '../../Images/Project/trvl.png';


// Projects Section
class Projects extends Component{
    // Constructor
    constructor(props) {
        super(props);
        // Initiate State Value
        this.state = {
            windowWidth: 0,
            projectImageWidth:336,
            projectHighlight: 2,
            translateDistance: 674.5,
            projectMargin:50,
            zoom:[false,true,false,false],
            textData: this.props.textData,
            projectInfo: this.props.textData.rechatting,
            showDetails:false
        }  
    }

    // Function That Start When The Component Open
    componentDidMount() {
        // Initiate Variable
        let windowWidth = window.innerWidth;
        let translateDistance, projectImageWidth, projectMargin;
        
        // If Window Width less than 600px than change some state
        if (windowWidth <= 600) {
            projectImageWidth = 224;
            translateDistance = 485;
            projectMargin = 40;

            // Updatig State With New Value
            this.setState({
                projectImageWidth: projectImageWidth,
                translateDistance: translateDistance,
                projectMargin: projectMargin
            });
        }

        // Input Window Width Value to State
        this.setState({ windowWidth: windowWidth,projectInfo:this.props.textData.rechatting });
    }

    // When Something Update
    componentDidUpdate(prevProps, prevState) {
        // If Language Change
        if (prevState.textData != this.props.textData) {
            // Changing Language State
            this.setState({ textData: this.props.textData });
            this.changeProjectInfo(this.state.projectHighlight);
        }
    }

    // Change Project Info
    changeProjectInfo = (project) => {
        // Initiate ProjectInfo Variable
        let projectInfo = null;

        if (project === 1) { // If project is 1
            projectInfo = this.state.textData.portfolio; // Change Project Info To Portfolio text data
        } else if (project === 2) { // If 2
            projectInfo = this.state.textData.rechatting; // Change Project Info To ReChatting text data
        } else if (project === 3) { // If 3
            projectInfo = this.state.textData.dolla; // Change Project Info To dolla text data
        } else if (project === 4) { // If 4
            projectInfo = this.state.textData.trvl; // Change Project Info To TRVL text data
        }

        // Update Project Info State Value
        this.setState({ projectInfo: projectInfo });
    }

    // Changing Project Highlight
    changeProjectHighlight = (project, prevProject) => {
        // Get Zoom and change Zoom index
        const zoom = this.state.zoom;
        zoom[project-1] = true; // Project - 1 to get project array index to true
        zoom[prevProject-1] = false; // Project - 1 to get previous array project to false

        // Change projectHighlight And Zoom Project
        this.setState({
            projectHighlight: project,
            zoom:zoom
        });

        // Change Project Info
        this.changeProjectInfo(project);
    }

    // Go To The Next Project
    nextProject = () => {
        // If Project Highlight Not More Than 4
        if (this.state.projectHighlight < 4) {
            // Inititate Project Now Variable
            const projectNow = this.state.projectHighlight;
            // Call changeProjectHighlight Function To change project
            this.changeProjectHighlight(projectNow + 1, projectNow);
        }
    }
    
    // Go To Previous Project
    previousProject = () => {
        // If Project Highligh More Then 1
        if (this.state.projectHighlight > 1) {
            // Inititate Project Now Variable
            const projectNow = this.state.projectHighlight;
             // Call changeProjectHighlight Function To change project
            this.changeProjectHighlight(projectNow - 1, projectNow);
        }
    }

    render() {
        // Get This State Variable
        const {
            textData,projectInfo,
            translateDistance,projectMargin,
            zoom,projectImageWidth,
            projectHighlight,showDetails
        } = this.state;

        // Projects Wrapper Slide to know how much px needed to slide to next project
        const ProjectsWrapperSlide = (projectImageWidth + projectMargin * 2) * (projectHighlight - 1);
        // Projects Wrapper Margin to know how muc px needed to show highlight project
        const ProjectsWrapperMargin = translateDistance - ProjectsWrapperSlide;
        
        return (
            <ProjectsContainer id="projects">
                <Details show={showDetails} projectDetails={projectInfo} textData={textData} closeDetails={() => { this.setState({ showDetails: false }) }}/>
                {/* Projects Wrap Max width is 1100px */}
                <ProjectsWrapper>
                    <Headline>{textData.headline}</Headline>
                </ProjectsWrapper>
                <ProjectsMain>
                    {/* Projects Image Wrap width 100% */}
                    <ProjectsThumbnailWrapper marginWidth={ProjectsWrapperMargin}>
                        {/* Project Thumbnail Portfolio */}
                        <ProjectThumbnail zoom={zoom[0]} src={Portfolio}alt="Tengku_Davyan_Portfolio" />
                        {/* Project Thumbnail ReChatting */}
                        <ProjectThumbnail zoom={zoom[1]} src={ReChatting} alt="ReChatting"/>
                        {/* Project Thumbnail dolla */}
                        <ProjectThumbnail zoom={zoom[2]} src={dolla} alt="dolla"/>
                        {/* Project Thumbnail TRVL */}
                        <ProjectThumbnail zoom={zoom[3]} src={trvl} alt="trvl"/>
                        {/* <PaddingSide paddingWidth={(windowWidth / 2) - (336/2) - 40} src='./images/contact.whatsapp.png' /> */}
                    </ProjectsThumbnailWrapper>
                    
                    {/* Projects Wrap For Projects Name, Desc and Button */}
                    <ProjectsWrapperInfo>
                        <PrevButton onClick={this.previousProject} />
                        <ProjectInfo>
                            <ProjectName>{projectInfo.projectName}</ProjectName>
                            <ProjectDesc>{projectInfo.desc}</ProjectDesc>
                        </ProjectInfo>
                        <NextButton onClick={this.nextProject} />
                    </ProjectsWrapperInfo>

                    {/* Wrapper For Button */}
                    <ProjectsWrapper>
                        <VisitButton href={projectInfo.link ? projectInfo.link : ''} target="_blank" showLink={projectInfo.link ? true : false}>{textData.visitWeb}</VisitButton>
                        <DetailButton onClick={() => this.setState({showDetails:true})}>{textData.seeDetails}</DetailButton>
                    </ProjectsWrapper>
                    {/* End Of Wrapper  */}
                </ProjectsMain>
            </ProjectsContainer>
        );
        
    }
    

}

export default Projects;