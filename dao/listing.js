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
  async unlist(listing_id) {
    const [id] = await db('listing')
    .where('listing_id', listing_id)
    .update({
      status: 'Archived'
    })
    .returning('listing_id')
    return(id)
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
  async getFilteredListings(searches, brands, categories, conditions, price_min, price_max) {
    const knexQuery = db('listing')
    .innerJoin('category', 'listing.category_id', 'category.category_id')
    .innerJoin('brand', 'listing.brand_id', 'brand.brand_id')

    if(searches) {
      searches.forEach((s) => {
        knexQuery.orWhere('description', 'like', `%${s}%`)
        knexQuery.orWhere('brand.name', s)
        knexQuery.orWhere('category.name', s)
      })
    }
    //AND -- need to make sure (searches or or or...) AND (brands or or or...)
    if(brands) {
      brands.forEach((b) => {
        knexQuery.orWhere('brand.name', b)
      })
    }
    if(conditions) {
      conditions.forEach((c) => {
        knexQuery.orWhere('condition', c)
      })
    }
    if(categories) {
      categories.forEach((c) => {
        knexQuery.orWhere('category.name', c)
      })
    }
    if(price_min) {
      knexQuery.andWhere('price', '>=', parseInt(price_min))
    }
    if(price_max) {
      knexQuery.andWhere('price', '<=', parseInt(price_max))
    }
    return knexQuery
  }
}

module.exports = new ListingDAO();
