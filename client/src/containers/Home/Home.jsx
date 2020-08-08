import React, { Component } from "react";
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid" id="homepageJumbotron">
          <div className="container">
            <h1 className="display-4"id="homeText">Google Books</h1>
            <p className="lead" id="homeTextSmall">
              Search for, view, and save books you want to read.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
