import React from "react";
import "./polls.css";
import polls from '../images/neu_polls.png';

const PollsComponent = () => {

    return(
        <div className='content'>
            <h1 className='headline'>NEU Polls</h1>

            <div className='main-bosart-img'>
                <img className='proj-img' src={polls} alt='polls'/>
            </div>

            <p>
            This is a web application that allows users to create, vote on, and comment on polls. This is based off of 
            a Facebook group made by Northeastern University students where members create polls and have others vote on it.
             Comments are also allowed to encourage discourse if revelant. The application also separates user and admin access 
             for updating user information and deleting/modifying polls.</p>
            <p>The frontend is written in React, and the backend is in Elixir.</p>

            <p><i>Please contact if you are interested in viewing the source code.</i></p>

        </div>
    )
}

export default PollsComponent;