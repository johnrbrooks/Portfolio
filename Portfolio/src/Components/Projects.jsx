import Nav from './Nav'
import Footer from './Footer'
import { Link } from 'react-router-dom'

export default function Projects() {
    return(
        <div className='projects-page'>
            <Nav />
            <div className='hero-section'>
                <h1 className="page-title">Projects</h1>
                <div className="projects-section">
                    <div className="project-item">
                        <img className='project-image' src="src/assets/images/helloWorldHome.png" alt="project-image" />
                        <div className="project-details">
                            <h2 className="project-title">helloWorld.ai</h2>
                            <p className="project-info">helloWorld is a user-friendly chat app that allows you to create a user, add your friends to your friends list, and then chat with them at will. In addition to providing a user to user chat experience, we've also implemented an AI Chat componenet which allows you to chat directly to a ChatGPT based AI to answer questions you may have while chatting!</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="project-item">
                        <div className="project-details">
                            <h2 className="project-title">My Fitness Calendar</h2>
                            <p className="project-info">My Fitness Calendar is an organizational tool to help you plan and complete your workouts at the gym. Once you've created a user, you can add various exercises to your calendar on any given day. Once exercises have been added, you can see how to perform them as well as other suggestions to better your workout routine. Once completed, you can either mark the exercise as complete, or delete it and add another one for your next work out!</p>
                        </div>
                        <img className='project-image' src="src/assets/images/My Fitness Planner App Pic.png" alt="project-image" />
                    </div>
                    <hr/>
                    <div className="project-item">
                        <img className='project-image' src="src/assets/images/Sudoku App Pic.png" alt="project-image" />
                        <div className="project-details">
                            <h2 className="project-title">Sudoku</h2>
                            <p className="project-info">A simple Sudoku app that allows you to select one of three difficulty levels and then complete the selected Sudoku puzzle. Also included is a timer so you can see how fast you are able to complete the puzzle, as well as a dark mode option!</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}