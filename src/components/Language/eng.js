import { eng as engDetail } from './Details/eng';

// Eng Text Variable
export const eng = {
    sidebar: { 
        home: 'Home',
        aboutMe: 'About Me',
        coding: 'Coding Skills',
        projects: 'Projects',
        others: 'Others',
        contact:'Contact Me'
    },
    heroSection: {
        introduction: "Hello, My name is ",
        name: 'Tengku Luthfi davyan',
        jobIntroduction: "I am a ",
        job1: "Web Developer",
        job2: "Mobile Application Developer",
        job3: "Web Designer",
        lastWord: "",
        download:'Download CV'
    },
    aboutMe: {
        headline:"WHO AM I ?",
        description:"I am a passionate, ambitious and hardworking, with skills and experience in website development, mobile application development and design. I always passionate to make an application that help many people. Everyday i always motivated learn something new everyday to develop myself. I have experience in web development, mobile application development and desktop development either in front-end or back-end. 2 years ago, i have made mobile application front-end with React Native as a freelancer. I don't really have professional experience, and i like to take my programming skill to professional work. I am 18 years old and live in Indonesia."
    },
    coding: {
        headline: "CODING SKILLS",
        frontEnd: "FRONT END",
        backEnd: "BACKEND",
        frameworks: "FRAMEWORKS",
        database: "DATABASE",
        experience: {
            html: '4 Years',
            css: '4 Years',
            python: '1 Years',
            javaScript: '3 Years',
            java: '3 Years',
            php: '3 Years',
            reactJs: '3 Years',
            django: '1 Years',
            reactNative:'3 Years',
            mysql: '2 Years',
            mongoDB:'6 Months'
            
        }
    },
    projects: {
        headline: "PROJECTS",
        portfolio: {
            projectName: 'My Portfolio',
            desc: 'Portfolio Web to introduce myself,give information about my skill and my experience. I made this website with React JS Frameworks and CSS method that I use is “styled-components”.',
            link: 'https://tengkudavyan.com',
            githubLink: 'https://github.com/tengkudavyan/portfolio',
            showLink: true,
            showGithub:true,
            details:engDetail.portfolio
        },
        rechatting: {
            projectName: 'ReChatting',
            desc: 'Chat website application that can make a public or private chatting room based by tags. Can be used without login or anonymously. Build by Django framework and Mongo DB database.',
            link: '#',
            githubLink: 'https://github.com/tengkudavyan/rechatting',
            showLink:false,
            showGithub: false,
            details:engDetail.rechatting
        },
        dolla: {
            projectName: 'dolla',
            desc: 'Front-End Website that i made with React JS Frameworks. The purpose of this website is to show my ability in Front-End Web Development specially in React Js Frameworks.',
            link: 'https://dolla.tengkudavyan.com',
            githubLink: 'https://github.com/tengkudavyan/React-Js-MoneySaver-FrontEnd',
            showLink: true,
            showGithub:true,
            details:engDetail.dolla
        },
        trvl: {
            projectName: 'TRVL',
            desc: 'Front-End Website that i made with React Js Frameworks. Traveling theme website to show my skill in Front-End Web Development.',
            link: 'https://trvl.tengkudavyan.com',
            githubLink: 'https://github.com/tengkudavyan/React-JS-Travel-Web',
            showLink: true,
            showGithub:true,
            details:engDetail.trvl
        },
        visitWeb: "Visit Web",
        seeDetails:"See Details",
        seeCode:'Source Code'
    },
    others: {
        headline: "OTHERS",
        history: {
            headline: "HISTORY",
            history1: {
                headline: 'Vocational School District 9 Medan',
                subHeadline: '- Software Engineering Field',
                timePlace:'Medan, Indonesia (2017 to 2020)'
            },
            history2: {
                headline: 'Mobile Developer Freelance Work',
                subHeadline: '- Made a Mobile App Front-End With React Native',
                timePlace:'Medan, Indonesia (2019)'
            }
        },
        language: {
            headline: "LANGUAGE",
            language1: {
                headline: 'English',
                level: 'Bussiness Level',
                percent:'75%'
            },
            language2: {
                headline: 'Japanese',
                level: 'Conversation Level - same as JLPT N3',
                percent:'60%'
            },
            language3: {
                headline: 'Indonesian',
                level: 'Native Level',
                percent:'100%'
            }
        }
    },
    contactMe: {
        headline: "CONTACT ME",
        nameInput: 'Fullname :',
        namePlaceholder: 'Your Fullname',
        emailInput: 'Email Adress :',
        emailPlaceholder: 'Your Email',
        messageInput: 'Message :',
        sendButton: 'Send Message',
        id: 'ID :',
        phoneNumber: 'Phone : ',
        email: 'tengkudavyan@gmail.com',
        phone: '+62 812 6234 2529',
        lineId: 'tengku.davyan17',
        linkedin: 'Tengku Davyan',
        github:'github.com/tengkudavyan',
        telegramId: '@tengkudavyan',
    }
    
}
