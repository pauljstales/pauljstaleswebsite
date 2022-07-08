import React from 'react';
import logo from './meandmason.jpg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <h1>This Website is being rebuilt...</h1>
      <h2>I am Paul J Stales.</h2>
      <p>
        I love my family, software, cats, and food from around the world. <br />I <del>hate</del> am traffic.
      </p>
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
        -- or just gives them a pleasant escape from a rough day -- <br />
        <b>
          <i>In short - whatever helps someone's day become a little easier and/or a little brighter.</i>
        </b>
      </p>
      <a className='App-link' href='https://www.twitter.com/pauljstales' target='_blank' rel='noopener noreferrer'>
        My twitter.
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
      <p>That is it for now... check back soon.</p>
    </div>
  );
}

export default App;
