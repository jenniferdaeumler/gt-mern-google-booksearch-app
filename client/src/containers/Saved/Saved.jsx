import React, { Component } from "react";
import "./Saved.css";

class Saved extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 id="savedBooksText">Saved Books</h1>
              <div className="card">
                <div className="card-body">
            {/* I would dynamically render the saved books here by using the get route for the savedBooks in the DB */}
                  <p>
                    Picture: 
                    Title:
                    Author(s):
                    Description:
                    Link:
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

export default Saved;
