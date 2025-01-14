const available_payoutDAO = require('../dao/available_payout');

class Available_PayoutService {
  createPayout(payoutDto) {
    const { user_id } = payoutDto;
    return available_payoutDAO.createPayout(
        user_id
    );
  }
  getPayout(payoutDto) {
    const { user_id } = payoutDto;
    return available_payoutDAO.getPayout(
        user_id
    );
  }
  resetPayout(payoutDto) {
    const { user_id } = payoutDto;
    return available_payoutDAO.resetPayout(
        user_id
    );
  }
  addToPayout(payoutDto) {
    const { user_id, amount } = payoutDto
    return available_payoutDAO.addToPayout(
        user_id, amount
    )
  }
}

module.exports = new Available_PayoutService();