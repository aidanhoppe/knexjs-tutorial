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
  async getFilteredListings(searches, brands, categories, conditions, price_min, price_max, sold, page, limit) {
    const knexQuery = db('listing')
    .innerJoin('category', 'listing.category_id', 'category.category_id')
    .innerJoin('brand', 'listing.brand_id', 'brand.brand_id')
    //need to join with created_at, updated_at, name as aliases OR just name and dont include the timestamps
    
    //add -- i forgot

    if(sold) {
      knexQuery.where('listing.status', 'Sold')
    } else {
      knexQuery.where('listing.status', 'Active')
    }
    if(searches) {
      knexQuery.where(function() {
        searches.forEach((s) => {
          this.orWhere('description', 'ilike', `%${s}%`)
          this.orWhere('title', 'ilike', `%${s}%`)
          this.orWhere('brand.name', s)
          this.orWhere('category.name', s)
        })
      })
    }
    //AND -- need to make sure (searches or or or...) AND (brands or or or...)
    if(brands) {
      knexQuery.where(function() {
        brands.forEach((b) => {
          this.orWhere('brand.brand_id', b)
        })
      })
    }
    if(conditions) {
      knexQuery.where(function() {
        conditions.forEach((c) => {
          this.orWhere('condition', c)
        })
      })
    }
    if(categories) {
      knexQuery.where(function() {
        categories.forEach((c) => {
          this.orWhere('category.category_id', c)
        })
      })
    }
    if(price_min) {
      knexQuery.andWhere('price', '>=', parseInt(price_min))
    }
    if(price_max) {
      knexQuery.andWhere('price', '<=', parseInt(price_max))
    }
    knexQuery.orderBy('listing.created_at', 'desc')
    .select('*', 
    'brand.name AS brand_name', 
    'category.name AS category_name',
    'listing.status AS status',
    'brand.status AS brand_status', 
    'listing.created_at AS created_at',
    'listing.updated_at AS updated_at',
    'brand.created_at AS brand_created_at', 
    'category.created_at AS category_created_at')
    if(page&&limit) {
      const startIndex = (parseInt(page) - 1) * parseInt(limit)
      knexQuery.limit(parseInt(limit)).offset(startIndex)
    }
    return knexQuery
  }
}

module.exports = new ListingDAO();
