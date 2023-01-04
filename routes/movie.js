const express = require("express");
const movieController = require("../controllers/movie");

const router = express.Router();

router.get("/api/movies/trending", movieController.getTrending);

router.get("/api/movies/top-rate", movieController.getTopRate);

router.get("/api/movies/discover", movieController.getGenre);

module.exports = router;
