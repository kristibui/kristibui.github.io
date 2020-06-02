import React from "react";
import "./mass.css";
import mass from '../images/mass_precinct_example.png';

const MassComponent = () => {

    return(
        <div className='content'>
            <h1 className='headline'>Boston Art Database</h1>

            <div className='main-bosart-img'>
                <img className='proj-img' src={mass} alt='mass'/>
            </div>

            <p>
            This is a study completed using data science methodologies (such as data gathering, cleaning, and modeling) 
            researching any correlation between the various demographics of precincts in Massachusetts, 
            and how they voted on the legalization of Marijuana in 2016.</p>
            <p>
            Written in R, and utilizes a sqlite database to store demographic data. 
            View the study <a className='links' href='http://kristibui.com/mass_precinct_marijuana/'>here</a>, 
            and the source code <a className='links' href='https://github.com/kristibui/mass_precinct_marijuana'>here</a>.
            </p>
        </div>
    )
}

export default MassComponent;