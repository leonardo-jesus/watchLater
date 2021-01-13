module.exports = {
    async create(videos) {
        const saveVideos = require('../controllers/CreateCard');
        const CardRepository = require('../repositories/cardRepository');

        const videosIds = videos.map(video => video.id.videoId);

        const isWatched = await CardRepository.getCards(videosIds);


        for (let i = 0; i < isWatched.length; i++) {
            if (!isWatched[i]) {
                const saveWatchedVideo = await videos.find(video => video.id.videoId === videosIds[i]);

                const savedVideos = await saveVideos.create(saveWatchedVideo);
            };
        };
    },
};