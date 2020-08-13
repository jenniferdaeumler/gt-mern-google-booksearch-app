import axios from "axios";

//exported to controllers
export default {
  // query from search to get book, plugged into API search
  searchedBook: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  //api/books is the saved book route...
  //sending a get request to the server at the address /api/books
  savedBooks: function () {
    return axios.get("/api/books")
  },
  //this saves a book to the database
  saveBook: function (bookInfo) {
    return axios.post("/api/books", bookInfo)
  },
  //deletes a book given a specific id
  deletedBook: function (id) {
    return axios.delete("/api/books/" + id)
  },
};