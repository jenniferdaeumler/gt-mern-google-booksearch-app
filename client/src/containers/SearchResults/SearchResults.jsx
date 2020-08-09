import React from 'react';

const SearchResults = (props) => {
    return (
        <ul className="list-group searchResults">
        {/* {props.search.map(search => (
          <li key={search} className="list-group-item">
            <img alt="Book" src={search} className="img-fluid" />
          </li>
        ))} */}
      </ul>
    );
};

export default SearchResults;