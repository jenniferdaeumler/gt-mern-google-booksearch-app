import React from "react";

function searchResults(props) {
  console.log(props.results);

  const books = props.results.map((book) => {
    const description = book.searchInfo
      ? book.searchInfo.textSnippet
      : "";
      const pic = book.volumeInfo.imageLinks
      ? book.volumeInfo.imageLinks.smallThumbnail
      : "";

    return (
      <div className="container" key={book.id}>
        <div className="card">
          <div className="card-body">
            <img
              src={pic}
              alt="Book Pic"
            />

            <h5 className="card-title">{book.volumeInfo.title} </h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {book.volumeInfo.authors}{" "}
            </h6>
            <p
              className="card-text"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
            <a href={book.volumeInfo.infoLink} className="card-link">
              View
            </a>
            <div
              className="btn btn-primary card-link"
              onClick={() => props.saveBook(book.id)}
            >
              Save
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div>{books}</div>;
}

export default searchResults;
