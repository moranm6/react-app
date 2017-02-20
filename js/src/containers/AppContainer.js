import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import Navigation from '../components/Navigation';
import Hello from '../components/Hello';
import {Link} from 'react-router'

class AppContainer extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Navigation></Navigation>
        <h1>Super Hero Registration</h1>
        <p className="lead">The heroes we registered, not the ones we deserved.</p>
        {/*<div>Test</div>*/}
        {/*<Hello name="Michael"></Hello>        */}
        <Link to="/hello1">Hello 1</Link><br/>
      </div>
    );
  }
}

export default connect(state => ({ }))(AppContainer);
