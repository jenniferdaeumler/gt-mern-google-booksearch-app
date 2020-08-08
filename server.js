const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/config", (req, res) => {
  res.json({ success: true });
});

mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb://localhost/gt-mern-google-booksearch-app",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch((err) => {
    console.log("Unable to connect to database.");
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
