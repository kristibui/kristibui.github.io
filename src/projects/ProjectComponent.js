import React from "react";
import "./project.css";
import polls from './images/neu_polls.png';
import food from './images/food_reccs.png';
import bosart from './images/boston_art_db.png';
import mass from './images/mass_precinct_example.png';
import animator from './images/exampleAnimator.png';
import freecell from './images/freecellExample.png';

const ProjectComponent = () => {

    return(
        <div className='content'>
            <h1 className='headline'>projects</h1>

            <div className='project-container'>
                <div className='project-block grid-item'>
                    <img className='proj-img' src={polls} alt='polls'/>
                    <div class="overlay">
                        <div class="proj-text">NEU Polls</div>
                    </div>
                </div>

                <div className='project-block grid-item'>
                    <img className='proj-img' src={food} alt='food-recommendations'/>
                    <div class="overlay">
                        <div class="proj-text">What Should You Order?</div>
                    </div>
                </div>

                <div className='project-block grid-item'>
                    <img className='proj-img' src={bosart} alt='boston-art'/>
                    <div class="overlay">
                        <div class="proj-text">Boston Art Database</div>
                    </div>
                </div>

                <div className='project-block grid-item'>
                    <img className='proj-img' src={mass} alt='mass-precints'/>
                    <div class="overlay">
                        <div class="proj-text">MA Marijuana Legalization</div>
                    </div>
                </div>

                <div className='project-block grid-item'>
                    <img className='proj-img' src={animator} alt='easy-animator'/>
                    <div class="overlay">
                        <div class="proj-text">Easy Animator</div>
                    </div>
                </div>

                <div className='project-block grid-item'>
                    <img className='proj-img' src={freecell} alt='freecell'/>
                    <div class="overlay">
                        <div class="proj-text">Freecell</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectComponent;