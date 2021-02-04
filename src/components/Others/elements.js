import styled from 'styled-components';

// Others Container
export const OthersContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    min-height:800px;
    background-color:#3AAFA9;
`;

// Other Wrapper
export const OthersWrap = styled.div`
    width:100%;
    max-width:1100px;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-left:75px;
    margin-right:25px;
`;

// Others Section Headline
export const Headline = styled.h1`
    color:#17252A;
    font-size:45px;
    font-weight:900;
    margin-top:30px;
    text-align:center;

    @media screen and (max-width:600px){
        font-size:40px;
    }
`;

// Contents Wrapper
export const ContentsWrap = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    margin-top:30px;
    margin-bottom:30px;
    
    @media screen and (max-width:860px){
        flex-direction:column;
    }
`;

// Others Contains
export const SectionContainer = styled.div`
    display:flex;
    flex:1;
    box-sizing:border-box;
    flex-direction:column;
    align-items:center;
    background-color:#17252A;
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
    color:#FEFFFF;
    font-weight:600;
    font-size:28px;
`;

// Others Sub Container
export const OthersContent= styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
    width:100%;
    justify-content:center;
    position:relative;
`;

// Scroll Line
export const ScrollLine = styled.div`
    position:absolute;
    top:20px;
    bottom:20px;
    left:5px;
    z-index:0;
    background:#3B484D;
    width:7px;
    border-radius:50px;
`;

// History Container
export const HistoryContainer = styled.div`
    display:flex;
    margin:30px 0;
    flex-direction:row;
    align-items:center;
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
    background-color:#3AAFA9;
`;

// History Text Container
export const HistoryText = styled.div`
    display:flex;
    flex-direction:column;
    color:#FEFFFF;
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
    display:flex;
    flex-direction:column;
    width:80%;
    color:#FEFFFF;
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
    background-color:#3B484D;
`;

// Percent Level
export const Percent =  styled.div`
    width:${({percentLevel}) => percentLevel};
    height:10px;
    
    border-radius:50px;
    background-color:#3AAFA9;
`;