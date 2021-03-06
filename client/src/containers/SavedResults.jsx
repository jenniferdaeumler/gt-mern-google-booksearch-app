import React from 'react';
import Saved from "./Saved/Saved";

const SavedResults = () => {
    return (
        <div className="container" key={book.id}>
        <div className="card">
          <div className="card-body">
            <img
              src={book.volumeInfo.imageLinks.smallThumbnail}
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
};

export default SavedResults;