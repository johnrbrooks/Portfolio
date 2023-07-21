import Nav from './Nav'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import headshotImage from '../assets/images/Headshot-white.jpg'
import skills from '../assets/skills.js'


const About = () => {
    return (
        <div className="about-page">
            <Nav />
            <div className="about-section">
                <h1 className="page-title-about">About</h1>
                <div className="about-info-container">
                    <div className="about-pic">
                        <img className="about-image" src={headshotImage} alt="Headshot-image" />
                    </div>
                    <div className="about-info">
                        <h2 className='purpose-statement'>Purpose Statement</h2>
                        <p className="about-blurb">A motivated Software Engineer fueled by a strong desire for achievement, ingenuity, and a dedication to providing effective and sophisticated solutions to complex challenges. With a background in audio engineering and entrepreneurship, I possess abilities in innovative and streamlined troubleshooting, thorough precision, and adaptability. Driven by a strong commitment to creating unique and accessible products and services, I aim to positively influence people and revolutionize their approach to critical aspects of business, life, and software.</p>
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