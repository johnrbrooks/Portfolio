import Nav from './Nav'
import Footer from './Footer'
import github from '../assets/images/github-sign.png'
import linkIcon from '../assets/images/link.png'
import studioSyncPic from '../assets/images/StudioSyncDashboardPage2.png'
import helloWorldPic from '../assets/images/helloWorldHome.png'
import mfcPic from '../assets/images/My Fitness Planner App Pic.png'
import sudokuPic from '../assets/images/Sudoku App Pic.png'
import antfPagePic from '../assets/images/ANTF_BandSite.png'
import { Link } from 'react-router-dom'

export default function Projects() {
    return(
        <div className='projects-page'>
            <Nav />
            <div className='hero-section'>
                <h1 className="page-title">Projects</h1>
                <div className="projects-section">
                    <div className="project-item">
                        <img className='project-image' src={antfPagePic} alt="project-image" />
                        <div className="project-details">
                            <h2 className="project-title">A Night To Forget</h2>
                            <div className="project-info">
                                <p className="project-info-blurb">A responsive, dynamic website for the D.C area band A Night To Forget. All show and song data is loaded from an MongoDB/Express API that can be updated by the band behind an admin portal login. In addition, users of the site have the ability to add shows to their calendar, see the latest show information, and listen to the band's curated Spotify playlist from the Songs page!</p>
                                <div className="project-info-images">
                                    <a href="https://github.com/johnrbrooks/ANTF-Band-Site-Front" className='image-link'><img src={github} className='link-images' alt="github" /></a>
                                    <a href="https://www.anighttoforget.com/" className='image-link'><img src={linkIcon} className='link-images' alt="link" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-item reversed">
                        <div className="project-details">
                            <h2 className="project-title">StudioSync</h2>
                            <div className="project-info">
                                <p className="project-info-blurb">StudioSync is a fully responsive MERN stack application that provides recording studio owners with a comprehensive solution to manage their customer relationships. Users have full CRUD (create, read, update, and delete) functionality on prospects, in addition to a calendar feature for follow-up tracking, and a data analytics page to keep track of the studio's sales activity.</p>
                                <div className="project-info-images">
                                    <a href="https://github.com/johnrbrooks/StudioSync-frontend" className='image-link'><img src={github} className='link-images' alt="github" /></a>
                                    <a href="https://studiosync-frontend-production.up.railway.app/login" className='image-link'><img src={linkIcon} className='link-images' alt="link" /></a>
                                </div>
                            </div>
                        </div>
                        <img className='project-image' src={studioSyncPic} alt="project-image" />
                    </div>
                    <div className="project-item">
                        <img className='project-image' src={helloWorldPic} alt="project-image" />
                        <div className="project-details">
                            <h2 className="project-title">helloWorld.ai</h2>
                            <div className="project-info">
                                <p className="project-info-blurb">helloWorld is a user-friendly chat app that allows you to create a user, add your friends to your friends list, and then chat with them at will. In addition to providing a user to user chat experience, we've also implemented an AI Chat component which allows you to chat directly to a ChatGPT based AI to answer questions you may have while chatting!</p>
                                <div className="project-info-images">
                                    <a href="https://github.com/kevinleet/helloWorld_frontend" className='image-link'><img src={github} className='link-images' alt="github" /></a>
                                    <a href="https://helloworldfrontend-production.up.railway.app/login" className='image-link'><img src={linkIcon} className='link-images' alt="link" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="project-item reversed">
                        <div className="project-details">
                            <h2 className="project-title">My Fitness Calendar</h2>
                            <div className="project-info">
                                <p className="project-info-blurb">My Fitness Calendar is an organizational tool to help you plan and complete your workouts at the gym. Once you've created a user, you can add various exercises to your calendar on any given day. Once exercises have been added, you can see how to perform them as well as other suggestions to better your workout routine. Once completed, you can either mark the exercise as complete, or delete it and add another one for your next work out!</p>
                                <div className="project-info-images">
                                    <a href="https://github.com/johnrbrooks/Workout-Helper" className='image-link'><img src={github} className='link-images' alt="github" /></a>
                                    <a href="https://myfitnessplannerapp-production.up.railway.app/" className='image-link'><img src={linkIcon} className='link-images' alt="link" /></a>
                                </div>
                            </div>
                        </div>
                        <img className='project-image' src={mfcPic} alt="project-image" />
                    </div>
                    <hr/>
                    <div className="project-item">
                        <img className='project-image' src={sudokuPic} alt="project-image" />
                        <div className="project-details">
                            <h2 className="project-title">Sudoku</h2>
                            <div className="project-info">
                                <p className="project-info-blurb">A simple Sudoku app that allows you to select one of three difficulty levels and then complete the selected Sudoku puzzle. Also included is a timer so you can see how fast you are able to complete the puzzle, as well as a dark mode option!</p>
                                <div className="project-info-images">
                                    <a href="https://github.com/johnrbrooks/Sudoku-Game" className='image-link'><img src={github} className='link-images' alt="github" /></a>
                                    <a href="https://cold-organization.surge.sh/" className='image-link'><img src={linkIcon} className='link-images' alt="link" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}