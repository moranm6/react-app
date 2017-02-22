import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import Navigation from '../components/Navigation';
// import Hello from '../components/Hello';
 import {Link} from 'react-router'

class AppContainer extends React.Component {

  constructor(props){
    super(props);
    this.init = this.init.bind(this);
  }

  init(list) {
    let {dispatch} = this.props;
    dispatch({ type: 'INIT', names: list });
  }

  componentDidMount() {
    const jq = require('jquery');    
    if (this.props.names.length===0) {
      jq.getJSON('http://scottpreston.github.io/html/data.json', (data) => this.init(data.list));
    }
  }

  render() {
    const listofNames = this.props.names.map((user,idx) => 
      <li key={idx}>{user.name} -- {user.email} <a onClick={this.deleteUser} className={idx}>remove</a> , 
      <Link to={`/hello/${user.name}`}> Hello </Link></li>
    );    
    return (
      <div>
        <Navigation></Navigation>
        <h1>Super Hero Registration</h1>
        <p className="lead">The heroes we registered, not the ones we deserved.</p>
        {this.props.children}
        <ul>{listofNames}</ul>
        {/*<div>Test</div>*/}
        {/*<Hello name="Michael"></Hello>        */}
        {/*<Link to="/hello1">Hello 1</Link><br/>*/}
      </div>
    );
  }
}

export default connect(state => ({ names: state.names }))(AppContainer);
