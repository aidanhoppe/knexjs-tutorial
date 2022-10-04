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
  async updateListing(listing_id, title, price, shipping, description, condition, thumbnail, photos, brand_id, model, category_id, accepting_offers) {
    const [id] = await db('listing')
      .where('listing_id', listing_id)
      .update({
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
  async unlistMultiple(listing_ids) {
    const result = await db('listing')
    .whereIn('listing_id', listing_ids)
    .update({
      status: 'Archived'
    })
    return result
  }
  async getNewListings(page, limit) {
    const startIndex = (page - 1) * limit
    const results = await db('listing')
    .where('status', 'Active')
    .orWhere('status', 'Sold')
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
  async deleteListing(listing_id) {
    const [id] = await db('listing')
    .where('listing_id', listing_id)
    .del(['listing_id'])
    return id
  }
  async getUserListings(user_id) {
    const listings = await db('listing')
    .where('seller_id', user_id)
    .andWhere('status', 'Active')
    .orderBy('created_at', 'desc')
    .select()
    return listings
  }
}

module.exports = new ListingDAO();
