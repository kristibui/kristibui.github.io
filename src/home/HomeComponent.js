import React from "react";
import "./home.css"

const HomeComponent = () => {

    return(
        <div className='content'>
            <h1 className='headline'>hello ✌️ my name is kristi</h1>
            <h2 className='sub-headline'>I am a data-passionate developer and student.</h2>

            <div className='about-body'>
                <p>
    I currently work at <i>Capital One</i> as a <b>Software Engineering Intern</b>, and in the Fall of 2020, will be 
                working as <i>Signify Health</i> as an <b>Analytic Engineering Intern</b>. I am a senior Computer Science student 
                at Northeastern University, and am super interested about data engineering, data visualization, and
                the interesection of technology and civics. 
                </p>
                <p>
                Outside of 👩🏻‍💻, I'm especially passionate about photography, traveling, 
                thrifting and sustainable living, teaching myself guitar, and playing with my cat!
                </p>
            </div>

            <a href='/projects'>
                <button className='learn-more-btn'>Learn More</button>
            </a>

        </div>
    )
}

export default HomeComponent;