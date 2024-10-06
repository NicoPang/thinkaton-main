import React from "react";
import "./About.css";
import portrait from '../assets/images/me.jpeg';
import linkedin from '../assets/images/linkedin-icon.svg';
import github from '../assets/images/github-icon.svg';

function Home() {
    return (
        <div className="about">
            <div className="left-banner">
                <img src={portrait} alt="A picture of me, Nicholas Pang" className="portrait" />
                <h2>Nicholas Pang</h2>
                <p>Software/ML/Cyber enthusiast</p>
                <h3>Contact me!</h3>
                <div className="links">
                    <a href="https://www.linkedin.com/in/nicholas-a-pang/"><img src={linkedin} alt="LinkedIn Icon" /></a>
                    <a href="https://github.com/NicoPang/"><img src={github} alt="LinkedIn Icon" /></a>
                </div>
            </div>
            <div className="right-banner">
                <h1>About This Website</h1>
                <p>
                I made this blog to track my own personal progress and motivate myself to continuously learn and advance my technical knowledge.
                Feel free to stick around to read into what I've been up to, I'll be constantly updating this website and documenting my process.
                </p> 
                <h1>Who Am I?</h1>
                <p>
                I graduated from the University of Connecticut in 2024 with a B.S. in Computer Science, concentrating on Data Analytics.
                I'm still trying to figure out where I want to end up in the industry, but I'm interested in software, cyber, and cloud computing.
                After completing my most recent achievement of becoming an AWS Certified Solutions Architect - Associate, I came up with the idea of creating this blog to exercise what I've learned and also as a way to record my thoughts down somewhere.
                </p> 
                <p>
                You can track my progress over at the projects tab, where I'll be timelining my actions as well as listing future goals.
                </p>
            </div>
        </div>
    )
}

export default Home