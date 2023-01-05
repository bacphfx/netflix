const fs = require("fs");
const path = require("path");

const videoPath = path.join(
  path.dirname(require.main.filename),
  "data",
  "videoList.json"
);

module.exports = class Videos {
  static fetchAll(cb) {
    fs.readFile(videoPath, (err, fileContent) => {
      const videos = JSON.parse(fileContent);
      if (err) {
        cb(null);
      } else {
        cb(videos);
      }
    });
  }

  static getVideo(id, cb) {
    this.fetchAll((videos) => {
      const videoById = videos.find((video) => video.id == id);
      //   if (!videoById) {
      //     cb(null);
      //   } else {
      cb(videoById);
      //   }
    });
  }
};
