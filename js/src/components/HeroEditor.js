import React from 'react';
import ReactDOM from 'react-dom';
// import { Table, Column, Cell } from 'fixed-data-table-2';
import { Link } from 'react-router'

export default class HeroEditor extends React.Component {
    constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getState = this.getState.bind(this);

    this.state = this.getState(this.props)
  }

  getState(props) {
    return Object.assign({}, props.hero);
  }

  handleChange(event) {
    console.log("In handleChange");
    console.log("this.refs: " + this.refs);
    const newState = {
      uuid: this.refs.uuid.value,
      realName: this.refs.realName.value,
      heroName: this.refs.heroName.value,
      powers: this.refs.powers.value,
      s3ImageUrl: this.refs.s3ImageUrl.value,
      signedAccords: this.refs.signedAccords.value,
      abilities: {
        fightingSkills: this.refs.fightingSkills.value,
        strength: this.refs.strength.value,
        durability: this.refs.durability.value,
        energyProjection: this.refs.energyProjection.value,
        speed: this.refs.speed.value,
        intelligence: this.refs.intelligence.value
      },
      groups: this.state.groups,
    };
    this.setState(newState);
  }

  handleSubmit(event) {
    let hero = this.state
    event.preventDefault();
    this.props.updateHero(this.state);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.getState(nextProps));
  }    

  render() {
    return <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <button type="submit" >Update Hero</button>
          </div>
          <div>
            <div className="col"><img src={this.state.s3ImageUrl} /></div>
            <label htmlFor="s3ImageUrl">Image URL</label>
            <input type="text" className="form-control" onChange={this.handleChange} ref="s3ImageUrl" id="s3ImageUrl" value={this.state.s3ImageUrl} />
          </div>
          <div className="col col-lg-3">
            <div className="form-group">
              <label htmlFor="uuid">UUID</label>
              <input type="text" className="form-control" onChange={this.handleChange} ref="uuid" id="uuid" value={this.state.uuid} />
            </div>
          </div>
          <div className="col col-lg-3">
            <div className="form-group">
              <label htmlFor="heroName">Hero Name</label>
              <input type="text" className="form-control" onChange={this.handleChange} ref="heroName" id="heroName" value={this.state.heroName} />
            </div>
          </div>
            <div className="col col-lg-3">
              <div className="form-group">
                <label htmlFor="realName">Real Name</label>
                <input type="text" className="form-control" onChange={this.handleChange} ref="realName" id="realName" value={this.state.realName} />
              </div>
            </div>
            <div className="col col-lg-3">
              <div className="form-check">
                <label htmlFor="signedAccords">Signed the Sokovia Accords</label>
                <select className="form-control" onChange={this.handleChange} ref="signedAccords" id="signedAccords" value={this.state.signedAccords}>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

        </form>
    </div>
  }
}