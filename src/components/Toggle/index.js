import React from 'react';
import { ToggleContainer, LangContainer } from './elements';

const Toggle = ({ choice,linkTo}) => {
    
    return (
        <ToggleContainer to={linkTo}>
            <LangContainer chooseTrue={choice}>ENG</LangContainer>
            <LangContainer chooseTrue={!choice}>日本語</LangContainer>
            
        </ToggleContainer>
    )
}

export default Toggle;
