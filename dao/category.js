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
  async getCategories() {
    const categories = await db('category')
    .select('category_id AS value', 'name AS label')
    return categories
  }
}

module.exports = new CategoryDAO();
