const router = require("express").Router(); 
const db = require("../models/index")

router.get("/api/books", function(req, res) {
    db.Books.find({}).then(foundBook =>{
        res.json(foundBook)
    })
})

router.post("/api/books", function(req,res){
    db.Books.create(req.body).then(savedBook => {
        res.json(savedBook)
    })
})

router.delete("/api/books/:id", function(req,res){
    db.Books.destroy(req.params).then(deletedBook => {
        res.json(deletedBook)
    })
})

module.exports = router; 