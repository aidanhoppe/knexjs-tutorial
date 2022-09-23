const payoutService = require('../service/payout');

class PayoutController {
  async createPayout(req, res) {
    try {
      const id = await payoutService.createPayout(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new PayoutController();
