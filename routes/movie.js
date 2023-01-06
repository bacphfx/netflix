const express = require("express");
const movieController = require("../controllers/movie");
const videoController = require("../controllers/video");

const isAuth = require("../middleware/auth");

const router = express.Router();

router.get("/api/movies", isAuth, movieController.getRandomMovies);

router.get("/api/movies/trending", isAuth, movieController.getTrending);

router.get("/api/movies/top-rate", isAuth, movieController.getTopRate);

router.get("/api/movies/discover", isAuth, movieController.getGenre);

router.get("/api/movies/video", isAuth, videoController.getVideos);

router.get("/api/movies/search", isAuth, movieController.getSearch);

module.exports = router;
