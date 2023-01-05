const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const movieRouter = require("./routes/movie");

app.use(movieRouter);

app.use((req, res, next) => {
  res.status(404).send({ message: "Route not found" });
});

app.listen(5000, () => {
  console.log("Backend is running!");
});
