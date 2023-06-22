import Nav from './Nav'
import Footer from './Footer'
import { Link } from 'react-router-dom'


const About = () => {
    return (
        <div className="about-page">
            <Nav />
            <div className="about-section">
                <h1 className="page-title">About</h1>
                <div className="about-info-container">
                    <div className="about-info">
                        <p className="about-blurb">A motivated Software Engineer fueled by a strong desire for achievement, ingenuity, and a dedication to providing effective and sophisticated solutions to complex challenges. With a background in audio engineering and entrepreneurship, I possess abilities in innovative and streamlined troubleshooting, thorough precision, and adaptability. Driven by a strong commitment to creating unique and accessible products and services, I aim to positively influence people and revolutionize their approach to critical aspects of business, life, and software.</p>
                    </div>
                    <div className="about-pic">
                        <img className="about-image" src="https://media.licdn.com/dms/image/C4E03AQEw8xpzPaslkw/profile-displayphoto-shrink_200_200/0/1630523835861?e=1692835200&v=beta&t=2LxkCKqCa94QP_fJOj93szsGnuHRARlaF3PvfOx_Y9Q" alt="" />
                    </div>
                </div>
            </div>
            <div className="skills-education-section">
                <div className="skills-section">
                    <h2 className="skills-title">Skills</h2>
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