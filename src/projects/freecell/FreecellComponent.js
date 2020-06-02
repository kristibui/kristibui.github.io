import React from "react";
import "./freecell.css";
import freecell from '../images/freecellExample.png';

const FreecellComponent = () => {

    return(
        <div className='content'>
            <h1 className='headline'>Freecell</h1>

            <div className='main-bosart-img'>
                <img className='proj-img' src={freecell} alt='freecell'/>
            </div>

            <p>
            This is a version of the game Freecell written in Java with MVC design that allows a user 
            to play on the console. This was one of the first programs I wrote that utilized object oriented 
            design principles, so it was a big learning experience for me at the time. It is written with a 
            MVC pattern, where the view for this particular version of Freecell is facilitated through the model.</p>
            <p>View the full code <a className='links' href='https://github.com/kristibui/freecell'>here</a>.</p>

        </div>
    )
}

export default FreecellComponent;