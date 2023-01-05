const fs = require("fs");
const path = require("path");

const moviePath = path.join(
  path.dirname(require.main.filename),
  "data",
  "movieList.json"
);

const genrePath = path.join(
  path.dirname(require.main.filename),
  "data",
  "genreList.json"
);

module.exports = class Movies {
  static fetchAll(cb) {
    fs.readFile(moviePath, (err, fileContent) => {
      const movieList = JSON.parse(fileContent);
      if (err) {
        cb(null);
      } else {
        cb(movieList);
      }
    });
  }

  static getGenre(genreId, cb) {
    this.fetchAll((movies) => {
      const movieByGenre = movies.filter((movie) =>
        movie.genre_ids.includes(genreId)
      );
      fs.readFile(genrePath, (err, fileContent) => {
        const genreNames = JSON.parse(fileContent);
        if (!err) {
          const genreName = genreNames.filter((g) => g.id === genreId)[0];
          if (!genreName) {
            cb(null);
          } else {
            const name = genreName.name;
            cb(movieByGenre, name);
          }
        }
      });
    });
  }

  static getSearch(keyword, cb) {
    this.fetchAll((movies) => {
      const searchResult = movies.filter((movie) => {
        return (
          (movie.title
            ? movie.title.includes(keyword)
            : movie.name.includes(keyword)) || movie.overview.includes(keyword)
        );
      });
      if (!searchResult) {
        cb(null);
      } else {
        cb(searchResult);
      }
    });
  }
};
