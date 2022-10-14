const db = require('../db/db');

class BrandDAO {
  async createBrand(submitted_by, name) {
    const [id] = await db('brand')
      .insert({
        submitted_by,
        name
      })
      .returning('brand_id');

    return id;
  }
  async updateBrandStatus(brand_id, status) {
    const [id] = await db('brand')
    .where('brand_id', brand_id)
    .update({
      status
    })
    .returning('brand_id')
  }
  async getApprovedBrands() {
    const brands = await db('brand')
    .where('status', 'approved')
    .select('name AS label', 'brand_id AS value')
    return brands
  }
}

module.exports = new BrandDAO();
