import React from "react";
import "./articles.css"

const ArticlesComponent = () => {

    return(
        <div className='content'>
            <h1 className='headline'>🛠 articles - a work in progress 🛠</h1>

            <span>
            This space is meant to be a creative outlet for me to document memories such as my travel and living 
            experiences. Documenting these experiences has been something I have wanted to do for awhile, and I found 
            it most meaningful for myself to host it here. This section is currently a work-in-progress; 
            come back and check on it later!
            </span>

            <div className=''>
                <h2 className='section'>travel</h2>
                <hr className='divider'/>

                <ul>
                    <li>Barcelona 2019</li>
                    <li>Amsterdam 2019</li>
                    <li>London 2018</li>
                </ul>
            </div>

            <div className=''>
                <h2 className='section'>life in...</h2>
                <hr className='divider'/>

                <ul>
                    <li>New York City</li>
                    <li>Boston</li>
                </ul>
            </div>

        </div>
    )
}

export default ArticlesComponent;