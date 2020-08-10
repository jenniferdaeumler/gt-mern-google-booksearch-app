import React from "react";

function searchResults(props) {
  console.log(props.results);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Cover</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Description</th>
            <th scope="col">Link</th>
          </tr>
        </thead>
        <tbody>{props.results.map(renderBookData)}</tbody>
      </table>
    </div>
  );
}

const renderBookData = (book) => {
//   return (
// //     <tr key={book.title}>
// //       <td>
// //         <img src={book.picture} alt="Book Pic" />
// //       </td>
// //       <td>
// //         {book.author.first} {book.name.last}
// //       </td>
// //       <td>{book.description}</td>
//       <td>{book.selflink}</td>
// //     </tr>
//   );
};
export default searchResults;
