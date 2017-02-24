import React from 'react';
import ReactDOM from 'react-dom';
// import { Table, Column, Cell } from 'fixed-data-table-2';
import { Link } from 'react-router'

export default class Hero extends React.Component {

  render() {
    let dataList = this.props.heroes;
    return <section>
        <div className="row">
          <h2 className="col-md-2">Heroes</h2>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>
                <span className="col-md-2">Hero Name</span>
                {/*<Link to="/newHero" className="btn btn-xs btn-success col-md-1">
                  <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                  &nbsp;Add
                </Link>*/}
              </th>
              {/*<th><span className="col-md-3">ID</span></th>*/}
              <th><span className="col-md-3">Image</span></th>
              <th><span className="col-md-3">Real Name</span></th>
              <th><span className="col-md-1">Sell-Out</span></th>
            </tr>
          </thead>
          <tbody>
            {this.props.heroes.map((p) => (<HeroCell key={p.uuid} {...p} />))}
          </tbody>
        </table>
      </section>;
  }
}

const HeroCell = ({uuid, s3ImageUrl, heroName, realName, signedAccords}) => (
  <tr>
    {/*<td>{uuid}</td>*/}
    <td><Link to={`/hero/${uuid}`}>{heroName}</Link></td>
    <td><img src={s3ImageUrl} width='80px'/></td>
    <td>{realName}</td>
    <td>{signedAccords}</td>
  </tr>);
