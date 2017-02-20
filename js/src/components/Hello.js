import React from 'react';
import ReactDOM from 'react-dom';

export default class Hello extends React.Component {
  render() {
    let i = Math.PI;
    return <h1>{this.props.name}'s component</h1>;
  }
}