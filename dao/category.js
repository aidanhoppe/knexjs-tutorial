const db = require('../db/db');

class CategoryDAO {
  async createCategory(name) {
    const [id] = await db('category')
      .insert({
        name
      })
      .returning('category_id');

    return id;
  }
}

module.exports = new CategoryDAO();
