import React from 'react';

import NavLink from './NavLink';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
              <Link to="/" className="navbar-brand" activeClassName="active"></Link>
              {/*<img src="/assets/SHIELD-Logo.png" className="brand-logo" />*/}
              <ul className="nav navbar-nav">
                <NavLink to="/about" activeClassName="active">User</NavLink>
                <NavLink to="/heroes" activeClassName="active">Heroes</NavLink>
                <NavLink to="newHero">New Hero</NavLink>
              </ul>
            </div>
          </nav>
        </header>
        <section className="container-fluid">
          <div className="container starter-template">
            {this.props.children}
          </div>
        </section>
        <footer>
          <nav className="navbar navbar-fixed-bottom navbar-inverse">
            <div className="container">
              <p className="navbar-text navbar-center visible-xs visible-sm">© 2017 S.H.I.E.L.D.</p>
              <p className="navbar-text navbar-center hidden-xs hidden-sm">© 2017 Strategic Homeland Intervention Enforcement and Logistics Division</p>
            </div>
          </nav>
        </footer>
      </div>
    );
  }
}
