import React from "react";
import "./bosart.css";
import bosart from '../images/boston_art_db.png';

const BostonArtComponent = () => {

    return(
        <div className='content'>
            <h1 className='headline'>Boston Art Database</h1>

            <div className='main-bosart-img'>
                <img className='proj-img' src={bosart} alt='boston-art'/>
            </div>

            <p>
            This is a simple web application that showcases the different public art in Boston. Features include 
            allowing users to add new works of art into the system, as well as filtering the art on different 
            categories.</p>
            <p>This was the first project I wrote that connects a MySQL database to an application.
            The frontend is written with Flask, HTML, and CSS. 
            View the application <a className='links' href='https://boston-art.herokuapp.com/'>here</a>**, 
            and the source code <a className='links' href='https://github.com/kristibui/boston_art'>here</a>.
            </p>
            <p>
                <i>**Note that the images of art may not display correctly as it used to, due to 
                    the image hosting service no longer supporting the image URLs.
                </i>
            </p>


        </div>
    )
}

export default BostonArtComponent;