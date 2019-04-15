import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';

const NavMenu = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Content Manager</a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/movie">Movie</Link>
            </li>
            <li className="nav-item">
              <Link to="/mediatest">Media Test</Link>
            </li>
            <li className="nav-item">
              <Link to="/person">Person</Link>
            </li>
            <li className="nav-item">
              <Link to="/media">Media</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavMenu;