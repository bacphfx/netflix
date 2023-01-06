const Movies = require("../models/Movies");
const paginator = require("../utils/paging");

exports.getRandomMovies = (req, res, next) => {
  Movies.fetchAll((movieList) => {
    const randomNum = Math.floor(Math.random() * (movieList.length / 10));
    const randomMovies = paginator(movieList, randomNum, 10);
    res.status(200).json(randomMovies);
  });
};

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
  const genreId = +req.query.genre;
  if (!genreId) {
    return res.status(400).json("Not found genre param");
  }

  Movies.getGenre(genreId, (movieByGenre, name) => {
    if (!movieByGenre) {
      return res.status(404).json("Not found that genre id!");
    }
    const results = paginator(movieByGenre, req.query.page, 10);
    results.genre_name = name;
    res.status(200).json(results);
  });
};

exports.getSearch = (req, res, next) => {
  const keyword = req.query.keyword;
  if (!keyword) {
    return res.status(400).json("Not found keyword param");
  }
  Movies.getSearch(keyword, (result) => {
    if (result.length === 0) {
      return res.status(404).json("No matching results were found!");
    }
    res.status(200).json({ results: result });
  });
};
