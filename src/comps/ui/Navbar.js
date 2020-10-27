import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar bg-dark">
        <h1>
        <Link to='/'><i className="fab fa-github"/>   
         &nbsp; Github Search</Link>
        </h1>
         <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <a href="https://github.com/AndreiRacasan" target="_blank" rel="noopener noreferrer">Developer</a>
        </li>
        <li>
          <a href="https://docs.github.com/en/free-pro-team@latest/rest" target="_blank" rel="noopener noreferrer">API</a>
        </li>
      </ul>
        
      </nav>
    );
  }
}

export default Navbar;
