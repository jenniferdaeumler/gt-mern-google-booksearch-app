import React, { Component } from "react";
import "./Search.css";
import API from "../../Utils/API";

class Search extends Component {
  state = {
    search: "",
    image: [],
    author: [],
    title: [],
    description: [],
    link: [],
  };

  componentDidMount() {
    API.searchedBook()
      .then((res) => this.setState({ image: res.data.author }))
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("clicked submit");
    API.searchedBook(this.state.search)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form className="search">
                <div className="form-group">
                  <label for="exampleInputEmail1" id="searchText">
                    Search for a book...
                  </label>
                  <input
                    value={this.search}
                    onChange={this.handleInputChange}
                    name="search"
                    type="search"
                    className="form-control"
                    id="searchForm"
                    aria-describedby="searchForBook"
                    placeholder="Search by title or author."
                    id="searchedBook"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary"
                    id="searchButton"
                    onClick={this.handleFormSubmit}
                  >
                    Search
                  </button>
                </div>
              </form>

              <div className="card">
                <div className="card-body">
                  <p>
                    Picture: {this.author} Title: Author(s): Description: Link:
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
