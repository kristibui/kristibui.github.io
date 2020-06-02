import React from "react";
import "./animator.css";
import animator from '../images/example_animator.svg';

const AnimatorComponent = () => {

    return(
        <div className='content'>
            <h1 className='headline'>Easy Animator</h1>

            <div className='main-bosart-img'>
                <img className='proj-img' src={animator} alt='easy-animator'/>
            </div>

            <p>
            This is a program written in Java/Java Swing that allows a user to create different types of animations 
            in either a visual, textual, or SVG format by passing in a text file.
            This was the first program I wrote that utilized full MVC design - it taught me a lot about 
            object oriented design. </p>
            <p>
            View the full code <a className='links' href='https://github.com/kristibui/Animator'>here</a>.
            </p>
        </div>
    )
}

export default AnimatorComponent;