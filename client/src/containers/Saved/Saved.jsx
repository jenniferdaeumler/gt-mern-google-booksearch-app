import React, { Component } from "react";
import "./Saved.css";
// import { Book } from "../../../../models";
import API from "../../Utils/API";

class Saved extends Component {
  state = {
    data: [],
  };

  componentDidMount = () => {
    API.savedBooks().then((response) => {
      console.log(response.data);
      this.setState({ data: response.data });
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 id="savedBooksText">Saved Books</h1>
              <div className="card">
                <div className="card-body">
                  {this.state.data.map(savedBooksDisplay)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    function savedBooksDisplay(book) {
      return (
        <>
          <div className="container" key={book.id}>
            <div className="card">
              <div className="card-body">
                <img src={book.image} alt="Book Pic" />

                <h5 className="card-title">{book.title} </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {book.authors}{" "}
                </h6>
                <p>{book.description}</p>
                <a href={book.link} className="card-link">
                  LInk
                </a>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default Saved;
