const Movies = require("../models/Movies");
const Videos = require("../models/Videos");

exports.getVideos = (req, res, next) => {
  const film_id = req.query.film_id;

  if (!film_id) {
    return res.status(400).json("Not found film_id param");
  }

  Videos.getVideo(film_id, (videoById) => {
    if (!videoById) {
      return res.status(404).json("Not found video");
    }
    const validVideo = videoById.videos.filter(
      (video) =>
        (video.official === true &&
          video.site === "YouTube" &&
          video.type === "Teaser") ||
        (video.official === true &&
          video.site === "YouTube" &&
          video.type === "Trailer")
    );
    if (validVideo.length > 1) {
      const videoByDate = validVideo.sort(
        (a, b) => new Date(b.published_at) - new Date(a.published_at)
      )[0];
      return res.status(200).json(videoByDate);
    }
    res.status(200).json(validVideo);
  });
};
