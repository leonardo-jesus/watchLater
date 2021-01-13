const axios = require('axios');

const WatchedVideos = require('../services/watchedVideos');

const baseUrl = process.env.YOUTUBE_BASEURL;
const youtubeKey = process.env.YOUTUBE_KEY;

class SearchVideos {
  async index(req, res) {
    try {
      const response = await axios.get(`${baseUrl}/search?key=${youtubeKey}&part=snippet&type=video&channelId=UCyHOBY6IDZF9zOKJPou2Rgg&order=date`);

      const videos = response.data.items;

      const watchedVideos = WatchedVideos.create(videos);

      return;
    } catch (error) {
      console.log(error);
      return;
    };
  };
};

module.exports = new SearchVideos();