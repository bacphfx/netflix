const express = require("express");

const app = express();

const movieRouter = require("./routes/movie");

app.use(movieRouter);

app.listen(5000, () => {
  console.log("Backend is running!");
});
