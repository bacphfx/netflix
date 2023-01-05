const express = require("express");
const movieController = require("../controllers/movie");
const videoController = require("../controllers/video");

const router = express.Router();

router.get("/api/movies/trending", movieController.getTrending);

router.get("/api/movies/top-rate", movieController.getTopRate);

router.get("/api/movies/discover", movieController.getGenre);

router.get("/api/movies/video/", videoController.getVideos);

module.exports = router;
