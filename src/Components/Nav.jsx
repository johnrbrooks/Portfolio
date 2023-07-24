import resume from '../assets/SE Resume_July2023.pdf'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="nav-bar">
            <nav className="nav-items-container">
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/about" className="nav-item">About</Link>
                <Link to="/projects" className="nav-item">Projects</Link>
                <a href={resume} className='nav-item' target="_blank">Resume</a>
            </nav>
        </div>      
    )
}

export default Nav