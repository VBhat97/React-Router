import React from "react";
import { Link }  from "react-router";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>Rent a Bike. in</h1>
        {this.props.child}
        <Link to="Archived"> Archived </Link>
        <Link to="Settings"> Settings </Link>
      </div>
    );
  }
}