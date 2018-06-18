import React from "react";

export default class Archives extends React.Component {
  render() {
  	console.log(this.props);
    return (
      <div>
        <h1> Rent a Bike Archives!! ({this.props.params.articles}) </h1>
      </div>
    );
  }
}