const db = require('../db/db');

class ListingDAO {
  async createListing(seller_id, title, description,condition,photos,brand_id,model,category_id,accepting_offers) {
    const [id] = await db('listing')
      .insert({
        seller_id, 
        title, 
        description,
        condition,
        photos,
        brand_id,
        model,
        category_id,
        accepting_offers
      })
      .returning('listing_id');

    return id;
  }
}

module.exports = new ListingDAO();