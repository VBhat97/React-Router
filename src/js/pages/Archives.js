import React from "react";

export default class Archives extends React.Component {
  render() {
  	const { params } = this.props;
  	const { article } = params;
    return (
      <div>
        <h1> Rent a Bike Archives!! ({article}) </h1>
        <h2> Date : {this.props.location.query.date} , Filter : {this.props.location.query.filter}</h2>
      </div>
    );
  }
}