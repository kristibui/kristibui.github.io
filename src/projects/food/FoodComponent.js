import React from "react";
import "./food.css";
import food from '../images/food2.png';

const FoodComponent = () => {

    return(
        <div className='content'>
            <h1 className='headline'>What Should You Order?</h1>

            <div className='main-bosart-img'>
                <img className='proj-img' src={food} alt='food-reccs'/>
            </div>

            <p>
            This is a web application that simulates a food recommendation platform. This particular food 
            recommendation place recommends dishes based on dishes users already enjoy at their favorite restaurants. 
            It highlights the unique features of the graph database Neo4J, and utilizes that structure to cypher 
            recommendations for users. The frontend is written in React, and the backend is in a simple Python/Flask API 
            and Neo4J for the data store.</p>

            <p>View the full code <a className='links' href='https://github.com/moustafaabdel/foodies_recommendation'>here</a>.</p>

        </div>
    )
}

export default FoodComponent;