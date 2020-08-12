import React, { Component } from "react";
import "./Search.css";
import API from "../../Utils/API";
import SearchResults from "../../containers/SearchResults/SearchResults";

class Search extends Component {
  state = {
    search: "",
    results: [],
  };

  //   componentDidMount() {
  //     API.searchedBook()
  //       .then((res) => this.setState({ results: res.data.items }))
  //       .catch((err) => console.log(err));
  //   }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("clicked submit");

    if (this.state.search) {
      API.searchedBook(this.state.search)
        .then((res) => {
          console.log(res.data);
          if (res.data.status === "error") {
            throw new Error(res.data.items);
          }
          this.setState({ results: res.data.items, error: "" });
        })
        .catch((err) => this.setState({ error: err.message }));
    }
  };

  handleSavedBook = (id) => {

    const bookInfo = this.state.results.filter(book=>book.id===id)[0]
    console.log(bookInfo);
    // search results for the book with the same id as the id paramater;
    // constru
    //loop through array, look for book with matching id...
    // var i;
    // for (i = 0; i < id.length; i++) {
    //   console.log(id);
    // }
    // //add keys into to this object and construct it-->
    // const bookInfo = {};

    API.saveBook(bookInfo)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    // console.log(id);
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form className="search">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1" id="searchText">
                    Search for a book...
                  </label>
                  <input
                    value={this.search}
                    onChange={this.handleInputChange}
                    name="search"
                    type="search"
                    className="form-control"
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
              <SearchResults
                results={this.state.results}
                saveBook={this.handleSavedBook}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
