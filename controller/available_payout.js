const available_payoutService = require('../service/available_payout');

class Available_PayoutController {
  async createPayout(req, res) {
    try {
      const id = await available_payoutService.createPayout(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
  async resetPayout(req, res) {
    try {
      const amt = await available_payoutService.resetPayout(req.query);
      res.status(201).json(amt);
    } catch (err) {
      console.error(err);
    }
  }
  async getPayout(req, res) {
    try {
      const amt = await available_payoutService.getPayout(req.query);
      res.status(201).json(amt);
    } catch (err) {
      console.error(err);
    }
  }
  async addToPayout(req, res) {
    try {
        const amt = await available_payoutService.addToPayout(req.body);
        res.status(201).json(amt);
      } catch (err) {
        console.error(err);
      }
  }
}

module.exports = new Available_PayoutController();
