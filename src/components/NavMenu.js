import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export default class NavMenu extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    const { collapsed } = this.state;

    this.setState({
      collapsed: !collapsed,
    });
  }

  render() {
    const { collapsed } = this.state;

    return (
      <header>
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <div className="container">
            <a className="navbar-brand" href="/">Content Manager</a>
            <button type="button" onClick={this.toggleNavbar} className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div id="navbarSupportedContent" className="collapse navbar-collapse d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <div className="nav-item">
                  <Link to="/movie">Movie</Link>
                </div>
                <div className="nav-item">
                  <Link to="/mediatest">Media Test</Link>
                </div>
                <div className="nav-item">
                  <Link to="/person">Person</Link>
                </div>
                <div className="nav-item">
                  <Link to="/media">Media</Link>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
