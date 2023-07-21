import mail from '../assets/images/mail.png'
import linkedIn from '../assets/images/linkedin-logo.png'
import github from '../assets/images/github-sign.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <div className="footer-bar">
            <div className='footer-links'>
                <a href="" className='footer-image-links2'><img src={mail} alt="contact" className='footer-image2'/></a>
                <a href="" className='footer-image-links'><img src={linkedIn} alt="github" className='footer-image'/></a>
                <a href="" className='footer-image-links'><img src={github} alt="linkedin" className='footer-image'/></a>
            </div>
            <p className="footer-credits">Designed & built by John Brooks</p>
        </div>
    )
}

export default Footer