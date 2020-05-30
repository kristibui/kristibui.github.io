import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HomeComponent from "./home/HomeComponent";
import me from './me.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import './App.css';

const App = () => {
  return (

    <div className='container'>

      <div className='sidebar'>

        <div className='img-sidebar'>
            <img className='sidebar-pic' src={me} alt='sidebar-image'/>
            <div className='sidebar-name'><a className='ind-link' href='/'>kristi bui</a></div>
            <div className='sidebar-titles links'>
              <a className='ind-link' href='/projects'>projects</a><span> // </span>
              <a className='ind-link' href='/articles'>articles</a></div>
        </div>

        <div className='sidebar-info'>
          <a className='icons' href="mailto:kristi.bui27@gmail.com">
            <FontAwesomeIcon icon={faGithubSquare} size='2x'/>
          </a>
          <a className='icons' href="https://www.linkedin.com/in/kristi-bui/">
            <FontAwesomeIcon icon={faLinkedin} size='2x'/>
          </a>
          <a className='icons' href="https://github.com/kristibui">
            <FontAwesomeIcon icon={faEnvelopeSquare} size='2x'/>
          </a>

          {/* <div className='icons'>
            <FontAwesomeIcon icon={faGithubSquare} size='2x'/>
          </div>
          <div className='icons'>
            <FontAwesomeIcon icon={faLinkedin} size='2x'/>
          </div>
          <div className='icons'>
            <FontAwesomeIcon icon={faEnvelopeSquare} size='2x'/>
          </div> */}

        </div>

      </div>

      <Router>
          <Route exact path="/" component={HomeComponent}></Route>
      </Router>

    </div>

  );
};

export default App;
