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

module.exports = class Movie {
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

  static getGenreName(cb) {
    fs.readFile(genrePath, (err, fileContent) => {
      const genreList = JSON.parse(fileContent);
      if (err) {
        cb(null);
      } else {
        cb(genreList);
      }
    });
  }
};
