import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <div className="footer-bar">
            <div className='footer-links'>
                <a href="" className='footer-image-links2'><img src="src/assets/images/mail.png" alt="contact" className='footer-image2'/></a>
                <a href="" className='footer-image-links'><img src="src/assets/images/github-sign.png" alt="github" className='footer-image'/></a>
                <a href="" className='footer-image-links'><img src="src/assets/images/linkedin-logo.png" alt="linkedin" className='footer-image'/></a>
            </div>
            <p className="footer-credits">Designed & built by John Brooks</p>
        </div>
    )
}

export default Footer