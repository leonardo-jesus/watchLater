const express = require('express');
const router = express.Router();

const cron = require('node-cron');
const ListCards = require('./controllers/ListCards');
const CreateCard = require('./controllers/CreateCard');
const SearchVideos = require('./controllers/SearchVideos');

router.get('/cards', ListCards.index);
router.post('/cards', CreateCard.create);
router.get('/videos', SearchVideos.index);

cron.schedule("* * * * *", () => {
    SearchVideos.index();

    console.log("✔️  CRON ACTIVATED");
});

// cron.schedule("0 */1 * * *", () => {
//     SearchVideos.index();
//
//     console.log("✔️ CRON ACTIVATED");
// });

module.exports = router;