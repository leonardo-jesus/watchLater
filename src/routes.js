const express = require('express');
const router = express.Router();

const ListCards = require('./controllers/ListCards');

router.get('/cards', ListCards.index);

module.exports = router;