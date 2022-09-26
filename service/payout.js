const payoutDAO = require('../dao/payout');

class PayoutService {
  createPayout(payoutDto) {
    const { user_id, amount } = payoutDto;
    return payoutDAO.createPayout(
        user_id, amount
    );
  }
  getPayout(payoutDto) {
    const { user_id } = payoutDto;
    return payoutDAO.getPayout(
        user_id
    );
  }
  updatePayout(payoutDto) {
    const { payout_id } = payoutDto;
    return payoutDAO.updatePayout(
        payout_id
    );
  }
}

module.exports = new PayoutService();