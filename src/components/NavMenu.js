import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';

const NavMenu = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bgNav">
        <Link to="/">Content Manager</Link>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item nav-item-button active">
              <Link to="/movie">Movie</Link>
            </li>
            <li className="nav-item nav-item-button">
              <Link to="/mediatest">Media Test</Link>
            </li>
            <li className="nav-item nav-item-button">
              <Link to="/person">Person</Link>
            </li>
            <li className="nav-item nav-item-button">
              <Link to="/media">Media</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavMenu;