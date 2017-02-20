import React from 'react';
import ReactDOM from 'react-dom';

export default class Navigation extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">App</a>
                </div>
            </div>
        </nav>        
    );
  }
}


