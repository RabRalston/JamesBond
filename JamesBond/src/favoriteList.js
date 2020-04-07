import React from "react";
import NavLinks from "./components/navLink";

export default class FavoriteList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { favorites } = this.props;
    return (
      <div>
        <NavLinks />
        <ul>
          {favorites.map(data => {
            return (
              <div className="col-lg-4 col-md-6 pt-75" key={data.id}>
                <div className="movie">
                  <div className="card">
                    <img src={data.ImageURL} alt="007" />
                  </div>
                </div>
                <div className="movie-title text-left">
                  <h2>{data.Film} </h2>
                  <h3>{data["UK release date"]} </h3>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}



