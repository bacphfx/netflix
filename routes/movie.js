const express = require("express");
const movieController = require("../controllers/movie");

const router = express.Router();

router.get("/api/movies/trending", movieController.getTrending);

module.exports = router;
