import React from 'react';
import logo from './meandmason.jpg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Working on a new site. Be patient!</p>
        <a className='App-link' href='https://www.twitter.com/pauljstales' target='_blank' rel='noopener noreferrer'>
          My twitter.
        </a>
        <a
          className='App-link'
          href='https://www.linkedin.com/in/paul-j-stales'
          target='_blank'
          rel='noopener noreferrer'
        >
          My LinkedIn.
        </a>
      </header>
    </div>
  );
}

export default App;
