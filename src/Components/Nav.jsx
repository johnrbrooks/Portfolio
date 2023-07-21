import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="nav-bar">
            <nav className="nav-items-container">
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/about" className="nav-item">About</Link>
                <Link to="/projects" className="nav-item">Projects</Link>
                <Link to="/resume" className="nav-item">Resume</Link>
            </nav>
        </div>      
    )
}

export default Nav