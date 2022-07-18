import React from 'react';
import logo from './assets/img/logo.png';
import me from './assets/img/MasonAndI.jpg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <h4>Hello! This site is being upgraded...</h4>
      <h2>
        I am <span color='lightblue'>P</span>aul <span color='lightblue'>J</span> <span color='lightblue'>S</span>tales.
      </h2>
      <p>
        I love my family, software, cats, swimming, video games, coffee, and food from around the world. <br />
        <small>
          I <del color='gray'>hate</del> am traffic.
        </small>
      </p>

      <img id='me' src={me} alt='' />
      <h2>I am a full-stack software engineer.</h2>
      <p>
        I love the entire world of software, from the edge of the web to the depths of the database. <br />
        My colleagues would describe me as passionate, thorough, and clear. <br />
      </p>
      <h2>My goal is to create software that has a positive impact on people's lives.</h2>
      <p>
        What kind of positive impact? Software that <br />
        -- save people time -- <br />
        -- helps them achieve their goals -- <br />
        -- makes or saves them money -- <br />
        -- gives them a pleasant escape -- <br />
        <br />
        <b>
          <i>In short - whatever helps someone's day become a little easier and/or a little brighter.</i>
        </b>
      </p>

      <br></br>
      <hr></hr>
      <h2>You are welcome to reach out to me!</h2>
      <a className='App-link' href='https://www.twitter.com/pauljstales' target='_blank' rel='noopener noreferrer'>
        My Twitter.
      </a>
      <br />
      <br />
      <a
        className='App-link'
        href='https://www.linkedin.com/in/paul-j-stales'
        target='_blank'
        rel='noopener noreferrer'
      >
        My LinkedIn.
      </a>
      <h3>That is it for now... check back soon.</h3>
    </div>
  );
}

export default App;
