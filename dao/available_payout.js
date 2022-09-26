const db = require('../db/db');

class Available_PayoutDAO {
  async createPayout(user_id) {
    const [id] = await db('available_payout')
      .insert({
        user_id
      })
      .returning('user_id');
    return id;
  }
  async getPayout(user_id) {
    const [amt] = await db('available_payout')
      .where('user_id', user_id)
      .select('amount')
    return amt;
  }
  async resetPayout(user_id) {
    const [amt] = await db('available_payout')
      .where('user_id', user_id)
      .update({
        amount: 0
      })
      .returning('amount');
    return amt;
  }
}

module.exports = new Available_PayoutDAO();