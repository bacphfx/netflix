const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "movieList.json"
);

module.exports = class Movie {
  static fetchAll(cb) {
    fs.readFile(p, (err, fileContent) => {
      const movieList = JSON.parse(fileContent);
      if (err) {
        cb(null);
      } else {
        cb(movieList);
      }
    });
  }
};
