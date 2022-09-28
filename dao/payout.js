const db = require('../db/db');

class PayoutDAO {
  async createPayout(user_id, amount) {
    const [id] = await db('payout')
      .insert({
        user_id,
        amount
      })
      .returning('user_id');
    return id;
  }
  async getPayout(user_id) {
    const payouts = await db('payout')
      .where('user_id', user_id)
      .select()
    return payouts;
  }
  async updatePayout(payout_id) {
    const [amt] = await db('payout')
      .where('payout_id', payout_id)
      .update({
        //Can't use knex.fn.now()
        completed: new Date(),
        updated_at: new Date()
      })
      .returning('amount');
    return amt;
  }
}

module.exports = new PayoutDAO();