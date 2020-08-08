import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  render() {
    return (
      <div>
          <div className="container">
              <div className="row">
                  <div className = "col-12">
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1" id="searchText">Search for a book...</label>
            <input
              type="email"
              class="form-control"
              id="searchForm"
              aria-describedby="emailHelp"
              placeholder="Search by title or author."
            />
            <button type="submit" class="btn btn-primary" id="searchButton">
              Search
            </button>
          </div>
        </form>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Search;
