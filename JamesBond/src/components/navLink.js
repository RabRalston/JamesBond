import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavLinks extends Component {
  render() {
    return (
      <nav className="text-center">
        <Link to={"/"} onClick={() => this.forceUpdate()}>
          <button className="tab">Movies</button>
        </Link>
        <Link to={"/favorites"} onClick={() => this.forceUpdate()}>
          <button className="tab">Favourites</button>
        </Link>
      </nav>
    );
  }
}
