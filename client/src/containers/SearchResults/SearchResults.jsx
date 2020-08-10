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
// //     <tr key={book.volumeInfo.title}>
// //       <td>
// //         <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="Book Pic" />
// //       </td>
// //       <td>
// //         {book.volumeInfo.authors} 
// //       </td>
// //       <td>{book.volumeInfo.description}</td>
//       <td>{book.volumeInfo.infoLink}</td>
// //     </tr>
//   );
};
export default searchResults;
