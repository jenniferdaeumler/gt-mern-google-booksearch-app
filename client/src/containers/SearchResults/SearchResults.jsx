import React from "react";

function searchResults(props) {
  console.log(props.results);
  return <div>{props.results.map(renderBookData)}</div>;
}

const renderBookData = (book) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="Book Pic" />

          <h5 className="card-title">{book.volumeInfo.title} </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {book.volumeInfo.authors}{" "}
          </h6>
          <p className="card-text">{book.textSnippet}</p>
          <a href={book.volumeInfo.infoLink} class="card-link">
            View
          </a>
          <a href="www.google.com" class="card-link">
            Save
          </a>
        </div>
      </div>
    </div>
  );
};
export default searchResults;
