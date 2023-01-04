const Movie = require("../models/Movie");
const paginator = require("../utils/paging");

exports.getTrending = (req, res, next) => {
  Movie.fetchAll((movieList) => {
    const trendingList = movieList.sort((a, b) => b.popularity - a.popularity);
    const trendingResult = paginator(trendingList, req.query.page, 3);
    res.send(trendingResult);
  });
};
