const Card = require('../models/Card.js');

class CardRepository {
    async saveCard(id) {
        const savedCards = await Card.create({
            youtubeId: id
        })

        return savedCards;
    };

    async getCards(ids) {
        const savedCards = await Promise.all(ids.map(
            async (id) => {
                const card = await Card.findOne({ "youtubeId": id });

                return card;
            }
        ));

        return savedCards;
    };
};

module.exports = new CardRepository();