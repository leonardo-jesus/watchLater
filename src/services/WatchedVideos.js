module.exports = {
    async create(videos) {
        const saveVideos = require('../controllers/CreateCard');
        const CardRepository = require('../repositories/cardRepository');

        const videosIds = videos.map(video => video.id.videoId);

        const savedCards = await CardRepository.getCards(videosIds);

        // for (let i = 0; i < savedCards.length; i++) { // FOR watchedVideos OF savedCards
        
        //     if (!savedCards[i]) { // FILTER COM PROMISE.ALL
        //         const saveWatchedVideo = await videos.find(video => video.id.videoId === videosIds[i]);

        //         const savedVideos = await saveVideos.create(saveWatchedVideo);
        //     };
        // };

        // for(const [i, savedCards] of savedCards.entries()) {
            
        // };

        // [[0, null], [1, model]]

        savedCards.filter((videoId, i) => videoId).map(async (savedCard) => {
            if(!savedCard) {
                const saveWatchedVideo = await videos.find(video => video.id.videoId === videosIds[i]);

                const savedVideos = await saveVideos.create(saveWatchedVideo);
            };
        });
    },
};