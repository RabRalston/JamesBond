import React, { Component } from 'react';
import Header from "./components/Header";
import BondFilms from './BondFilms';
import "react-datepicker/dist/react-datepicker.css";
import './css/App.css';
import './css/grid.css';
import UserList from "./userList";
import FavoriteList from "./favoriteList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends Component {

  constructor(){
    super();

    this.state={
      search:null,
      showModal: false,
      sidebarOpen: false,
      list: [],
      favorites: []
    };
  }

  addFavorite = favorite => {
    const { favorites } = this.state;

    if (!favorites.some(alreadyFavorite => alreadyFavorite.id === favorite.id)) {
      this.setState({
        favorites: [...this.state.favorites, favorite]
      });
    }
  };

  getList = async () => {
      this.setState({
        list: BondFilms
      });
  };

  componentDidMount() {
    this.getList();
  }

  render(){
    return (
      <div className="App">
        <div className="container">
          <Header></Header>
          <section className="content">
            <div className="row ">
              <div className="col-lg-12">
                <Router>
                  <Switch>
                    <Route
                      path="/"
                      exact
                      render={() => (
                        <UserList list={this.state.list} addFavorite={this.addFavorite} />
                      )}
                    />
                    <Route
                      path="/favorites"
                      render={() => <FavoriteList favorites={this.state.favorites} />}
                    />
                  </Switch>
                </Router>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default App;
