import Nav from './Nav'
import Footer from './Footer'
import headshotImage from '../assets/images/Headshot-white.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home-page">
            <Nav />
            <div className="home-hero-section">
                <div className='hero-container1'>
                    <h1 className="page-title">John Brooks</h1>
                    <h2 className="page-subtitle">Full-Stack Web Developer</h2>
                    <div className="quick-buttons-container">
                        <Link to="/projects" className="quick-button">Projects</Link>
                        <Link to="/resume" className="quick-button">Resume</Link>
                    </div>
                </div>
                <div className="hero-container2">
                    <div className="contact-image-container">
                        <img src={headshotImage} className='contact-image' alt="" />
                    </div>
                </div>
            </div>
            {/* <div className="contact-container">
                <div className="contact-section">
                    <h1 className="contact-title">Contact</h1>
                    <div className="contact-grid-container">
                        <div className="contact-image-container">
                            <img src={headshotImage} className='contact-image' alt="" />
                        </div>
                        <div className="contact-info-grid">
                            <h3 className='contact-info-title'>Phone:</h3>
                            <p>703-268-0738</p>
                            <h3 className='contact-info-title'>Email:</h3>
                            <p>johnrbrooks93@gmail.com</p>
                            <h3 className='contact-info-title'>LinkedIn:</h3>
                            <p>https://www.linkedin.com/in/johnbrooks-webdev/</p>
                            <h3 className='contact-info-title'>GitHub:</h3>
                            <p>https://github.com/johnrbrooks</p>
                        </div>
                    </div>
                    <h3 className='contact-info-statement'>Feel free to reach out to me via phone, email, or LinkedIn!</h3>
                </div>
            </div> */}
            <Footer />
        </div>
    )
}

export default Home