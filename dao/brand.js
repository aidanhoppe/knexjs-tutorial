const db = require('../db/db');

class BrandDAO {
  async createBrand(submitted_by, name) {
    const [id] = await db('user')
      .insert({
        submitted_by,
        name
      })
      .returning('brand_id');

    return id;
  }
}

module.exports = new BrandDAO();
