const db = require('../db/db');

class ListingDAO {
  async createListing(seller_id, title, price, shipping, description, condition, thumbnail, photos, brand_id, model, category_id, accepting_offers) {
    const [id] = await db('listing')
      .insert({
        seller_id, 
        title, 
        price,
        shipping,
        description,
        condition,
        thumbnail,
        photos,
        brand_id,
        model,
        category_id,
        accepting_offers
      })
      .returning('listing_id');
    return id;
  }
  async getNewListings(page, limit) {
    const startIndex = (page - 1) * limit
    const results = await db('listing')
    .orderBy('created_at', 'desc')
    .select()
    .limit(limit)
    .offset(startIndex)
    return results
  }
  async getListing(listing_id) {
    const [listing] = await db('listing')
    .where('listing_id', listing_id)
    .select()
    return listing
  }
}

module.exports = new ListingDAO();
