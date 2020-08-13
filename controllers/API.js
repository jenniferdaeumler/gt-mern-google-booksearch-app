const router = require("express").Router();
const db = require("../models/index");

//server responding to get request sent to the address /api/books by finding all Books from the DB then res.json --> responding with json and sending 
//the searched book data back
router.get("/api/books", function (req, res) {
  db.Book.find({}).then((searchedBook) => {
    res.json(searchedBook);
  });
});

router.post("/api/books", function (req, res) {
  console.log(req.body);
  db.Book.create(req.body).then((saveBook) => {
    res.json(saveBook);
  });
});

router.delete("/api/books/:id", function (req, res) {
  db.Book.destroy(req.params).then((deletedBook) => {
    res.json(deletedBook);
  });
});

module.exports = router;
