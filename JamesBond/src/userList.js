import React from "react";
import NavLinks from "./components/navLink";
import ReactModal from 'react-modal';
import "react-datepicker/dist/react-datepicker.css";
ReactModal.setAppElement('#root');

export default class UserList extends React.Component {

    constructor(){
        super();
    
        this.state={
          search:null,
          showModal: false,
          list: [],
          favorites: []
        };
    
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
      }

      handleOpenModal (data) {
        console.log(data.description);
        this.setState({ 
            showModal: true, 
            film: data.Film,
            bond: data["Bond Actor"],
            image: data["ImageURL"],
            releaseDate: data["UK release date"],
            description: data["Description"],
            boxOffice: data["Box Office(Millions)"]
        });
      }
      
      handleCloseModal () {
        this.setState({ showModal: false });
      }

      searchSpace=(event)=>{
        let keyword = event.target.value;
        this.setState({search:keyword})
      }

  render() {
    return (
      <div>
        <NavLinks />
            <div className="col-lg-12 text-center">
                <div className="row text-center">
                    <select className="ml-30" onChange={(e)=>this.searchSpace(e)}>
                        <option value="">Search by Lead Actor</option>
                        <option value="Sean Connery">Sean Connery</option>
                        <option value="George Lazenby">George Lazenby</option>
                        <option value="Roger Moore">Roger Moore</option>
                        <option value="Timothy Dalton">Timothy Dalton</option>
                        <option value="Pierce Brosnan">Pierce Brosnan</option>
                        <option value="Daniel Craig">Daniel Craig</option>
                    </select>
                </div>
              </div>
  
          {this.props.list.map(data => {
              if(this.state.search == null) {
                    return (
                        <div className="col-lg-4 col-md-6 pt-75" key={data.id}>
                        <div className="movie">
                            <div className="card">
                            <img src={data.ImageURL}  alt="007"/>
                            <div className="card-divider" onClick={() => this.handleOpenModal(data)}>
                                <p>Read More</p>
                            </div>
                            </div>
                        </div>

                        <ReactModal 
                            isOpen={this.state.showModal}
                            contentLabel="onRequestClose Example"
                            onRequestClose={this.handleCloseModal}
                            className="Modal"
                            overlayClassName="Overlay"
                            >


                            <div id="movie-card-list">
                                <div class="movie-card" data-movie={this.state.film}>
                                <img src={this.state.image}  alt="007" className="img" />
                                    <div class="movie-card__overlay"></div>
                                    <div class="movie-card__content">
                                        <div class="movie-card__header">
                                            <h1 class="movie-card__title">{this.state.film} </h1>
                                            <h4 class="movie-card__info">{this.state.bond}</h4>
                                            <h4 class="movie-card__info">Release Date: {this.state.releaseDate}</h4>
                                            <h4 class="movie-card__info">Box Office: &pound;{this.state.boxOffice} million</h4>
                                        </div>
                                        <p class="movie-card__desc">{this.state.description}</p>
                                        <div className="text-center">
                                        <button className="button" onClick={this.handleCloseModal}>Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ReactModal> 

                        <div className="movie-title text-left">
                            <h2>{data.Film} </h2>
                           
                            <h3>{data["UK release date"]} </h3>
                            <div className="rating-box">
                            
                            <span className="rating-star full-star" title="Add to Favourites"></span>
                            <button className="button" onClick={() => this.props.addFavorite(data)}>
                            <span>Add to Favourites</span>
                                </button>
                            </div>
                        </div>
                        </div>
            
                    );
                }
                else if(data.Film.toLowerCase().includes(this.state.search.toLowerCase()) || data["Bond Actor"].toLowerCase().includes(this.state.search.toLowerCase()) || data["UK release date"].toLowerCase().includes(this.state.search.toLowerCase()))
                return (
                    <div className="col-lg-4 col-md-6 pt-75" key={data.id}>
                    <div className="movie">
                        <div className="card">
                            <img src={data.ImageURL}  alt="007"/>
                            <div className="card-divider" onClick={this.handleOpenModal}>
                                <p>Read More</p>
                            </div>
                        </div>
                    </div>
                    
                    <ReactModal 
                        isOpen={this.state.showModal}
                        contentLabel="onRequestClose Example"
                        onRequestClose={this.handleCloseModal}
                        className="Modal"
                        overlayClassName="Overlay"
                        >
                        <h1>{data.Film}</h1>
                        <button className="button" onClick={this.handleCloseModal}>Close</button>
                    </ReactModal>
                    <div className="movie-title text-left">
                        <h2>{data.Film} </h2>
                        <h3>{data["UK release date"]} </h3>
                        <div className="rating-box">
                            <span className="rating-star full-star" title="Add to Favourites"></span>
                            <button className="button" onClick={() => this.props.addFavorite(data)}>
                                <span>Add to Favourites</span>
                            </button>
                        </div>
                    </div>
                </div>
            );
          })}       
      </div>
    );
  }
}
