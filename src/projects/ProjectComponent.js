import React from "react";
import "./project.css"

const ProjectComponent = () => {

    return(
        <div className='content'>
            <h1 className='headline'>projects</h1>

            <div className='project-container'>
                <div className='project-block grid-item'>
                    neu polls
                </div>

                <div className='project-block grid-item'>
                    where should you eat
                </div>

                <div className='project-block grid-item'>
                    boston art
                </div>
            </div>

            <div className='project-container'>
                <div className='project-block grid-item'>
                    MA marijuana legalization
                </div>

                <div className='project-block grid-item'>
                    easy animator
                </div>

                <div className='project-block grid-item'>
                    freecell
                </div>
            </div>

        </div>
    )
}

export default ProjectComponent;