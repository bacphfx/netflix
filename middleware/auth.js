const fs = require("fs");
const path = require("path");
const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "userToken.json"
);

module.exports = (req, res, next) => {
  fs.readFile(p, (err, fileContent) => {
    const users = JSON.parse(fileContent);
    if (err) {
      return;
    }
    const token = req.query.token;
    for (user of users) {
      if (user.token === token) {
        return next();
      }
      return res.json("Unauthorized");
    }
  });
};
