const Movies = require("../models/Movies");
const paginator = require("../utils/paging");

exports.getTrending = (req, res, next) => {
  Movies.fetchAll((movieList) => {
    const trendingList = movieList.sort((a, b) => b.popularity - a.popularity);
    const trendingResult = paginator(trendingList, req.query.page, 10);
    res.status(200).json(trendingResult);
  });
};

exports.getTopRate = (req, res, next) => {
  Movies.fetchAll((movieList) => {
    const topRateList = movieList.sort(
      (a, b) => b.vote_average - a.vote_average
    );
    const topRateResult = paginator(topRateList, req.query.page, 10);
    res.status(200).json(topRateResult);
  });
};

exports.getGenre = (req, res, next) => {
  if (!req.query.genre) {
    return res.status(400).json("Not found genre param");
  }
  Movies.fetchAll((movieList) => {
    const movieListByGenre = movieList.filter((movie) =>
      movie.genre_ids.includes(+req.query.genre)
    );
    if (movieListByGenre.length === 0) {
      return res.status(400).json("Not found that genre id!");
    }
    const pagedList = paginator(movieListByGenre, req.query.page, 10);
    Movies.getGenreName((genreNames) => {
      const genreName = genreNames.filter((g) => g.id === +req.query.genre);
      pagedList.genre_name = genreName[0].name;
      res.json(pagedList);
    });
  });
};
