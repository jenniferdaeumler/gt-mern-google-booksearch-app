import axios from "axios";

//exported to controllers
export default {
  // query from search to get book, plugged into API search
  searchedBook: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  //api/books is the saved book route...
  savedBooks: function () {
    return axios.get("/api/books").then((result) => result.data);
  },
  //this saves a book to the database
  saveBook: function (bookInfo) {
    return axios.post("/api/books", bookInfo).then((result) => result.data);
  },
  //deletes a book given a specific id
  deletedBook: function (id) {
    return axios.delete("/api/books/" + id).then((result) => result.data);
  },
};