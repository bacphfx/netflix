const express = require("express");
const router = express.Router();
const videoController = require("../controllers/video");

router.get("/api/movies/video/:film_id", videoController.getVideos);
