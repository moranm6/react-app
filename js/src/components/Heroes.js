import React from 'react';
import ReactDOM from 'react-dom';

export default class Heroes extends React.Component {
  render() {
    // let i = Math.PI;
    return <div>
        <h1>Hero List</h1>
        {this.props.heroes.map((p, i) => (<p>{p.name}</p>))}
    </div>;

  }
}