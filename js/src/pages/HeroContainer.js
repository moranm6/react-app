import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import Navigation from '../components/Navigation';
// import Hello from '../components/Hello';
import Hero from '../components/Hero'
//import HeroList from '../pages/HeroContainer'
import {Link} from 'react-router'

class HeroContainer extends React.Component {

  constructor(props){
    super(props);
    this.init = this.init.bind(this);
  }

  init(list) {
    let {dispatch} = this.props;
    dispatch({ type: 'INIT', heroes: list });
  }

  componentDidMount() {
    const jq = require('jquery');    
    if (this.props.heroes.length===0) {
      jq.getJSON('https://ce3rt0e0yl.execute-api.us-east-1.amazonaws.com/prod/abbHeros', (data) => this.init(data));
    }
  }

  render() {
    /*const listofNames = this.props.heroes.map((hero,idx) => 
      <li key={idx}>{hero.heroName} -- {hero.powers} <a onClick={this.deleteUser} className={idx}>remove</a> , 
      <Link to={`/hello/${hero.name}`}> Hello </Link></li>*/

    const listofNames = this.props.heroes.map((hero,idx) => 
        <div>
          <tr>
            <td key={idx}>{hero.heroName}</td>
          </tr>
          <tr>
            <td key={idx}>{hero.powers}</td>
          </tr>
        </div>
    );    
    return (
      <div>
        <h1>Super Hero Registration</h1>
        <p className="lead">The heroes we registered, not the ones we deserved.</p>
        <table>
          <tr>
            <th>Hero</th>
            <th>Powers</th> 
          </tr>
          {listofNames}
        </table>        
        {this.props.children}
        <Hero heroes={this.props.heroes}/>;
        {/*<Hello name="Michael"></Hello>        */}
        {/*<Link to="/hello1">Hello 1</Link><br/>*/}
      </div>
    );
  }
}

export default connect(state => ({ heroes: state.heroes }))(HeroContainer);
