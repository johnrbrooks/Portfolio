import mail from '../assets/images/mail.png'
import linkedIn from '../assets/images/linkedin-logo.png'
import github from '../assets/images/github-sign.png'
import linkIcon from '../assets/images/link.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <div className="footer-bar">
            <div className='footer-links'>
                <a href="https://github.com/johnrbrooks" className='image-link'><img src={github} className='link-images' alt="github" /></a>
                <a href="https://www.linkedin.com/in/johnbrooks-webdev/" className='image-link'><img src={linkedIn} className='link-images' alt="link" /></a>
            </div>
            <p className="footer-credits">Designed & built by John Brooks</p>
        </div>
    )
}

export default Footer