import React from 'react'
import HeroEditor from '../components/HeroEditor'
import { connect } from 'react-redux';

const emptyHero = {
    'abilities': {
      'fighting skills': 0,
      'strength': 0,
      'durability': 0,
      'energy projection': 0,
      'speed': 0,
      'intelligence': 0
    },
    'realName': 'empty',
    's3ImageUrl': 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDkZaETToJ5xPX-HBAxLoG8LLRbk3wdjqnEbqLV4GmCaSpLLog3imSFQ',
    'powers': 'empty',
    'uuid': 'empty',
    'heroName': 'empty',
    'signedAccords': 'No',
    'groups': []
  };

class EditContainer extends React.Component {

  constructor(props){
    super(props);
    this.init = this.init.bind(this);
    this.addHero = this.addHero.bind(this);
  }

  init(data) {
    const { dispatch, params} = this.props;
    const hero = params.id ? data.filter(h => h.uuid === params.id)[0] : Object.assign({}, emptyHero);
    dispatch({ type: "GET_HERO", hero: hero });
    
  }

  componentDidMount() {
    const jq = require('jquery');    
      jq.getJSON('https://ce3rt0e0yl.execute-api.us-east-1.amazonaws.com/prod/abbHeros', (data) => this.init(data));
  }

  addHero(updatedHero) {
    const {dispatch, router} = this.props;
    dispatch({ type: "EDIT_HERO", hero: updatedHero });
  }

  render() {
      console.log
    return (
        // <HeroEditor hero={this.props.hero} params={this.props.params} updateHero={this.addHero} />
        <HeroEditor testName="testHero" hero={this.props.hero} params={this.props.params} updateHero={this.addHero}/>
        // <HeroEditor hero="testHero"/>
    );
  }
}

export default connect(state => ({ hero: state.hero }))(EditContainer);
