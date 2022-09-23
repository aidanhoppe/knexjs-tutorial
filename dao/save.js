const db = require('../db/db');

class SaveDAO {
  async createSave(user_id, listing_id) {
    const [id] = await db('save')
      .insert({
        user_id,
        listing_id
      })
      .returning('save_id');
    return id;
  }
  async deleteSave(user_id, listing_id) {
    const res = await db('save')
    .where('user_id', user_id)
    .andWhere('listing_id', listing_id)
    .del(['user_id', 'listing_id'])
    return res
  }
  async getSaveId(listing_id, user_id) {
    const id = await db('save')
    .where('user_id', user_id)
    .andWhere('listing_id', listing_id)
    .select('save_id')
    return id
  }
}

module.exports = new SaveDAO();
