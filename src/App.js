import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HomeComponent from "./home/HomeComponent";
import me from './me.png';
import './App.css';

const App = () => {
  return (

    <div className='container'>

      <div className='sidebar'>

        <div className='img-sidebar'>
          <a href='/'>
            <img className='sidebar-pic' src={me} alt='sidebar-image'/>
            <div className='sidebar-name'>kristi bui</div>
            <div className='sidebar-titles'>engineer, thrifter, cat enthusiast</div>
          </a>
        </div>

        <div className='sidebar-info'>

        </div>

        <div className='links'>
          <a className='ind-link' href='/about'>about</a> | <a className='ind-link' href='/projects'>projects</a> | <a className='ind-link' href='/articles'>articles</a> | <a className='ind-link' href='/contact'>contact</a>
        </div>

      </div>

      <Router>
          <Route exact path="/" component={HomeComponent}></Route>
      </Router>

    </div>

  );
};

export default App;
