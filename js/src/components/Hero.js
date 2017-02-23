import React from 'react';
import ReactDOM from 'react-dom';
// import { Table, Column, Cell } from 'fixed-data-table-2';
import { Link } from 'react-router'

export default class Hero extends React.Component {

  render() {
    let dataList = this.props.heroes;
    return <div>
        <h1>Hero List</h1>
        {this.props.heroes.map((p, i) => (<p>{p.name}</p>))}
    </div>;

  }
}