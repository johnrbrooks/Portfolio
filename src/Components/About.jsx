import Nav from './Nav'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import headshotImage from '../assets/images/Headshot-white.jpg'
import audioImage from '../assets/images/WorkingStudio.jpeg'
import guitarImage from '../assets/images/BandStage.jpeg'
import skills from '../assets/skills.js'


const About = () => {
    return (
        <div className="about-page">
            <Nav />
            <div className="about-section">
                <h1 className="page-title-about">About</h1>
                <div className="about-info-container">
                    <div className="about-pic">
                        <img className="about-image" src={audioImage} alt="studio-image" />
                        <img className="about-image" src={guitarImage} alt="guitar-image" />
                    </div>
                    <div className="about-info">
                        <p className="about-blurb">Growing up as a quick learner, I was always excited to delve into the next coolest thing I could learn and dedicate time and energy to passionately. This led me through multiple sports before landing on hockey, led me through multiple instruments before landing on guitar, and led me through multiple career paths before landing on software engineering. I have never known how to pursue anything less than 110%, and it can be seen in all the endeavors I’ve taken on. From pursuing music all the way through a bachelor’s degree at JMU’s music school, to pursuing and succeeding in an audio engineering career for 5 years post-graduation, and eventually to graduating from two web development certification courses. Web development and software engineering has become the answer to a life of chasing the most challenging goals, solving the oddest and most obscure problems creatively, and doing whatever it takes to get the job done right in the end. </p>
                    </div>
                    
                </div>
            </div>
            <div className="skills-education-section">
                <div className="skills-section">
                    <h2 className="skills-title">Skills</h2>
                    <div className="skills">
                        {skills.map((skill) => (
                            <div className={`skill ${skill.type}`} key={skill.id}>
                                <p>{skill.skill}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="education-section">
                    <h2 className="education-title">Education</h2> 
                    <div className="education-container">
                        <h3 className="education-item-title">Bachelor Of Music</h3>
                        <h4 className="education-item-info">James Madison University</h4>
                        <h4 className="education-item-info">Grad. May 2016</h4>
                    </div>
                    <div className="education-container">
                        <h3 className="education-item-title">Software Engineering Immersive</h3>
                        <h4 className="education-item-info">General Assembly</h4>
                        <h4 className="education-item-info">Cert. Awarded August 2023</h4>
                    </div>
                    <div className="education-container">
                        <h3 className="education-item-title">Front End Web Development</h3>
                        <h4 className="education-item-info">General Assembly</h4>
                        <h4 className="education-item-info">Cert. Awarded May 2023</h4>   
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About