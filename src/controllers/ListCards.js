const axios = require('axios');

const baseUrl = process.env.TRELLO_BASEURL;
const trelloKey = process.env.TRELLO_KEY;
const trelloToken = process.env.TRELLO_TOKEN;

class ListWonDealsController {
  async index(req, res) {
    try {
      const response = await axios.get(`${baseUrl}/boards/5fd28dc2e4fef58164d291e6/cards?key=${trelloKey}&token=${trelloToken}`);

      return res.json(response.data);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'Error' });
    };
  };
};

module.exports = new ListWonDealsController();