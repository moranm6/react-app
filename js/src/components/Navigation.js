import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default class Navigation extends React.Component {

    constructor(props) {
        super(props);
    }
    

  render() {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">ABB Heroes</a>
                </div>
                <ul className="nav navbar-nav">
                    <li><Link to="/hello1">User</Link></li>
                    <li><Link to="/heroes">Heroes</Link></li>
                </ul>
            </div>
        </nav>        
    );
  }
}


