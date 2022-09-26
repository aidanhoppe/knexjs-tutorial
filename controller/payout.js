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
  async getPayout(req, res) {
    try {
      const payouts = await payoutService.getPayout(req.query);
      res.status(201).json(payouts);
    } catch (err) {
      console.error(err);
    }
  }
  async updatePayout(req, res) {
    try {
      const id = await payoutService.updatePayout(req.query);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new PayoutController();
