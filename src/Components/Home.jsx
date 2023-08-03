import Nav from './Nav'
import Footer from './Footer'
import headshotImage from '../assets/images/Headshot-white.jpg'
import resume from '../assets/John Brooks_Final SE Resume_Aug2023.pdf'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home-page">
            <Nav />
            <div className="home-hero-section">
                <div className="hero-outline">
                    <div className='hero-container1'>
                        <h1 className="page-title-home">John Brooks</h1>
                        <h2 className="page-subtitle">Full-Stack Web Developer</h2>
                        <div className="quick-buttons-container">
                            <Link to="/projects" className="quick-button">Projects</Link>
                            <a href={resume} className='quick-button' target="_blank">Resume</a>
                        </div>
                    </div>
                </div>
                <div className="hero-container2">
                    <div className="contact-image-container">
                        <img src={headshotImage} className='contact-image' alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home