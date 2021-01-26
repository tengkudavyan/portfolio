import React,{useState} from 'react';
import { BsHouseFill, BsThreeDots } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { BiCodeAlt }from 'react-icons/bi';
import { ImProfile } from 'react-icons/im';
import { HiPhone } from 'react-icons/hi';
import { SidebarContainer, LinkItem, Icon, Text } from './elements';

// Sidebar Container
const Sidebar = ({ textData }) => {
    // State Variabel To Control Hover Animation
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [textDisplay, setTextDisplay] = useState(false);

    return (
        <SidebarContainer
            open={sidebarOpen}
            onMouseEnter={() => { setSidebarOpen(true); setTimeout(() => { setTextDisplay(true) }, 280) }}
            onMouseLeave={() => { setTextDisplay(false); setTimeout(() => { setSidebarOpen(false) }, 10)  }}>
            {/* Home Navigation */}
            <LinkItem to='home' smooth={true} duration={500} spy={true} exact="true">
                <Icon><BsHouseFill/></Icon>
                <Text displayText={textDisplay} open={sidebarOpen}>{textData.home}</Text>
            </LinkItem>
            {/* About Me Navigation */}
            <LinkItem to='aboutMe' smooth={true} duration={500} spy={true} exact="true">
                <Icon><FaUser/></Icon>
                <Text displayText={textDisplay} open={sidebarOpen}>{textData.aboutMe}</Text>
            </LinkItem>
            {/* Coding Skills Navigation */}
            <LinkItem to="codingSkill" smooth={true} duration={500} spy={true} exact="true">
                <Icon><BiCodeAlt/></Icon>
                <Text displayText={textDisplay} open={sidebarOpen}>{textData.coding}</Text>
            </LinkItem>
            {/* Projects Navigation */}
            <LinkItem to='projects' smooth={true} duration={500} spy={true} exact="true">
                <Icon><ImProfile/></Icon>
                <Text displayText={textDisplay} open={sidebarOpen}>{textData.projects}</Text>
            </LinkItem>
            {/* Others Navigation */}
            <LinkItem to='others' smooth={true} duration={500} spy={true} exact="true">
                <Icon><BsThreeDots/></Icon>
                <Text displayText={textDisplay} open={sidebarOpen}>{textData.others}</Text>
            </LinkItem>
            {/* Contact Navigation */}
            <LinkItem to='contact' smooth={true} duration={500} spy={true} exact="true">
                <Icon><HiPhone/></Icon>
                <Text displayText={textDisplay} open={sidebarOpen}>{textData.contact}</Text>
            </LinkItem>
        </SidebarContainer>
    )
}

export default Sidebar;