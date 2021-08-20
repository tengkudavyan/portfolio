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
        description:"I am a passionate, ambitious and hardworking, with skills and experience in website development, mobile application development and design. I have been programming for 5 years. I always passionate to make an application that help many people. Everyday i always motivated learn something new to develop myself. I have experience in web development, mobile application development and desktop development either in front-end or back-end."
    },
    coding: {
        headline: "CODING SKILLS",
        content: [
            { // Front End Section
                title: "FRONT END",
                skills: [
                    {
                        name: "HTML 5",
                        year: "4 Years",
                        img: "html5.png",
                        rating: "5/5"
                    }, {
                        name: "CSS",
                        year: "4 Years",
                        img : "css.png",
                        rating: "5/5"
                    }
                ]
            },
            { // Backend Section
                title: "BACK END",
                skills: [
                    {
                        name: "Python",
                        year: "1 Years",
                        img: "python.png",
                        rating: "4/5"
                    }, {
                        name: "JavaScript",
                        year: "3 Years",
                        img : "javascript.png",
                        rating: "5/5"
                    },{
                        name: "Java",
                        year: "3 Years",
                        img : "java.png",
                        rating: "3/5"
                    },{
                        name: "PHP",
                        year: "3 Years",
                        img : "php.png",
                        rating: "4/5"
                    },{
                        name: "C#",
                        year: "6 Months",
                        img : "csharp.svg",
                        rating: "3/5"
                    },{
                        name: "Swift", 
                        year: "<6 Months",
                        img: "swift.png",
                        rating: "3/5"
                    },
                    {
                        name: "Go(lang)", 
                        year: "<6 Months",
                        img: "go.png",
                        rating: "3/5"
                    }
                ]
            },
            { // Framework Section
                title: "FRAMEWORKS",
                skills: [
                    {
                        name: "React JS",
                        year: "3 Years",
                        img: "react.png"
                    }, {
                        name: "Django",
                        year: "1 Years",
                        img : "django.png"
                    },{
                        name: "Vue JS",
                        year: "6 Months",
                        img : "vue.png"
                    },{
                        name: ".NET Core",
                        year: "6 Months",
                        img : "dotnet.png"
                    },
                    
                ]
            },
            {
                title: "MOBILE",
                skills: [
                    {
                        name: "React Native",
                        year: "3 Years",
                        img : "react.png"
                    }, 
                    {
                        name: "Flutter", 
                        year: "<6 Months",
                        img: "flutter.png"
                    },
                    {
                        name: "iOS", 
                        year: "<6 Months", 
                        img: "ios.png"
                    }
                ]
            },
            { // Database Section
                title: "DATABASE",
                skills: [
                    {
                        name: "MySQL",
                        year: "2 Years",
                        img: "mysql.png"
                    }, {
                        name: "MongoDB",
                        year: "1 Years",
                        img : "mongodb.png"
                    },{
                        name: "SQL Server",
                        year: "6 Months",
                        img : "sqlServer.svg"
                    }
                ]
            },
            { // Other Section
                title:"OTHERS",
                skills:[
                    {
                        name:"GIT",
                        year:"1 Years",
                        img: "git.png"
                    },{
                        name:"Restful API",
                        year:"1 Years",
                        img :"rest.png"
                    },
                ]
            }

        ]
    },
    projects: {
        headline: "PROJECTS",
        portfolio: {
            projectName: 'My Portfolio',
            desc: 'Portfolio Web to introduce myself,give information about my skill and my experience. I made this website with React JS Frameworks and CSS method that I use is “styled-components”.',
            link: 'https://tengkudavyan.com',
            githubLink: 'https://github.com/tengkudavyan/portfolio',
            details:engDetail.portfolio
        },
        rechatting: {
            projectName: 'ReChatting',
            desc: 'Chat website application that can make a public or private chatting room based by tags. Can be used without login or anonymously. Build by Django framework and Mongo DB database.',
            details:engDetail.rechatting
        },
        dolla: {
            projectName: 'dolla',
            desc: 'Front-End Website that i made with React JS Frameworks. The purpose of this website is to show my ability in Front-End Web Development specially in React Js Frameworks.',
            link: 'https://dolla.tengkudavyan.com',
            githubLink: 'https://github.com/tengkudavyan/dolla',
            details:engDetail.dolla
        },
        trvl: {
            projectName: 'TRVL',
            desc: 'Front-End Website that i made with React Js Frameworks. Traveling theme website to show my skill in Front-End Web Development.',
            link: 'https://trvl.tengkudavyan.com',
            githubLink: 'https://github.com/tengkudavyan/React-JS-Travel-Web',
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
            contents: [
                {
                    headline: "Web Developer - YVentures Group PTE. LTD.",
                    subHeadline: "- Developing Website",
                    timePlace: "Medan, Indonesia (Jun 2021 to now)"
                },
                {
                    headline: 'Fullstack Developer - PT. Cipta Kerja Indonesia',
                    subHeadline: '- Make Fullrest API Backend\n- Implement UI/UX Design To Frontend\n- Implement Fullrest API To Frontend\n- Design Database Structure',
                    timePlace:'Medan, Indonesia (Feb 2021 to Jun 2021)'
                },
                {
                    headline: 'Vocational School District 9 Medan',
                    subHeadline: '- Software Engineering Field',
                    timePlace:'Medan, Indonesia (Jul 2017 to Jun 2020)'
                },
                {
                    headline: 'Mobile Developer Freelance Work',
                    subHeadline: '- Made a Mobile App Front-End With React Native',
                    timePlace:'Medan, Indonesia (Mar 2019)'
                },
                
            ]
            
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
        addHint: '* Click to Add My Contact',
        sendSuccess:'Message has been sended'
    }
    
}
