const axios = require('axios');
const CardRepository = require('../repositories/cardRepository');

const baseUrl = process.env.TRELLO_BASEURL;
const trelloKey = process.env.TRELLO_KEY;
const trelloToken = process.env.TRELLO_TOKEN;
const telloApiToken = process.env.TRELLO_APITOKEN;

class CreateCard {
    async create(video) {
        try {
            const body = {
                "name": video.snippet.title,
                "desc": `Description: ${video.snippet.description}
                url: www.youtube.com/watch?v=${video.id.videoId}, 
                thumbnail: ${video.snippet.thumbnails.default.url}, 
                publishedAt: ${video.snippet.publishedAt}`
            };
            
            await axios.post(`${baseUrl}/cards?key=${trelloKey}&apiToken=${telloApiToken}&idList=5fd28dc2e4fef58164d291e7&token=${trelloToken}`, body);
            
            const savedCards = await CardRepository.saveCard(video.id.videoId);

            return savedCards;
        } catch (error) {
            console.log(error);
            return res.json(error);
        };
    };
};

module.exports = new CreateCard();