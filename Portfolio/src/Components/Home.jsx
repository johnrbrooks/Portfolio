import Nav from './Nav'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home-page">
            <Nav />
            <div className="hero-section">
                <h1 className="page-title">John Brooks</h1>
                <h2 className="page-subtitle">Full-Stack Web Developer</h2>
                <div className="quick-buttons-container">
                    <Link to="projects" className="quick-button">Projects</Link>
                    <Link to="/resume" className="quick-button">Resume</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home