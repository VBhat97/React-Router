import React from "react";
import { Link }  from "react-router";

export default class Layout extends React.Component {


  navigate(){
    this.props.history.pushState(null, "/");
  }

  render() {
    return (
      <div>
        <h1>RentaBike.in</h1>
        {this.props.children}
        <Link to="Archives"><button class="btn btn-danger"> Archives </button></Link>
        <Link to="Settings"><button class="btn btn-success"> Settings </button></Link>
        <button class="btn btn-primary" onClick={this.navigate.bind(this)}>Featured</button>
      </div>
    );
  }
}