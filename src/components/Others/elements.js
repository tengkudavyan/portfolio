import styled from 'styled-components';
import { primaryGreen,primaryBlack,softWhite,softGray } from '../GlobalComponent/Color';
import { FlexBox} from '../GlobalComponent/StylePackage';


// Other Wrapper
export const OthersWrap = styled.div`
    ${FlexBox('column','','center')}
    width:100%;
    max-width:1100px;
    margin: 0 25px 0 75px;
`;



// Contents Wrapper
export const ContentsWrap = styled.div`
    ${FlexBox('row')}
    width:100%;
    margin:30px 0;
    
    @media screen and (max-width:860px){
        flex-direction:column;
    }
`;

// Others Contains
export const SectionContainer = styled.div`
    ${FlexBox('column','','center')}
    flex:1;
    box-sizing:border-box;
    background-color:${primaryBlack};
    border-radius:30px;
    padding:20px;
    margin:20px 40px;

    @media screen and (max-width:1225px){
        margin:20px 20px;
    }

    @media screen and (max-width:860px){
        width:85%;
    }
    
`;

// Others Sub Headline
export const SubHeadline = styled.h2`
    color:${softWhite};
    font-weight:600;
    font-size:28px;
`;

// Others Sub Container
export const OthersContent = styled.div`
    ${FlexBox('column','center')}
    flex:1;
    width:100%;
    position:relative;
`;

// Scroll Line
export const ScrollLine = styled.div`
    position:absolute;
    top:20px;
    bottom:20px;
    left:5px;
    z-index:0;
    background:${softGray};
    width:7px;
    border-radius:50px;
`;

// History Container
export const HistoryContainer = styled.div`
    ${FlexBox('row','','center')}
    margin:30px 0;
    z-index:1;
`;

// Green Dot Container
export const GreenDotContainer = styled.div`
    flex:1;
`;
// Green Dot 
export const GreenDot = styled.div`
    width:17px;
    height:17px;
    border-radius:50px;
    box-sizing:border-box;
    margin-right:20px;
    background-color:${primaryGreen};
`;

// History Text Container
export const HistoryText = styled.div`
    ${FlexBox('column')}
    color:${softWhite};
    flex:10;
    margin-left:10px;
`;  

// History Headline
export const HistoryHeadline = styled.h1`
    font-size:21px;
    font-weight:700;

    @media screen and (max-width:1225px){
        font-size:18px;
    }

    @media screen and (max-width:860px){
        font-size:21px;
    }
`;

// HistorySubHeadline
export const HistorySubHeadline = styled.h2`
    font-size:15px;
    font-weight:400;
    margin-top:5px;

    @media screen and (max-width:1225px){
        font-size:13px;
    }

    @media screen and (max-width:860px){
        font-size:15px;
    }
`;

// History Place And Time 
export const HistoryPlaceTime = styled.h2`
    font-size:13px;
    font-weight:600;
    margin-top:5px;

    @media screen and (max-width:1225px){
        font-size:18px;
    }

    @media screen and (max-width:860px){
        font-size:15px;
    }
`;

// Language Container
export const LanguageContainer = styled.div`
    ${FlexBox('column')}
    width:80%;
    color:${softWhite};
    margin:20px 30px;

    @media screen and (max-width:500px){
        margin:20px 10px;
        width:90%
    }
`;

// LanguageHeadline
export const LanguageHeadline = styled.h1`
    font-size:22px;
    font-weight:700;
`;

// Language Level
export const LanguageLevel = styled.h2`
    font-size:17px;
    font-weight:400;
    margin-top:5px;
`;

// Percent Container
export const LanguagePercent = styled.div`
    width:100%;
    height:10px;
    margin-top:15px;
    border-radius:50px;
    background-color:${softGray};
`;

// Percent Level
export const Percent =  styled.div`
    width:${({percentLevel}) => percentLevel};
    height:10px;
    
    border-radius:50px;
    background-color:${primaryGreen};
`;