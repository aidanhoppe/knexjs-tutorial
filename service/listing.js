const listingDAO = require('../dao/listing');

class ListingService {
  createListing(listingDto) {
    const { seller_id, title, price, shipping, description, condition, thumbnail, photos, brand_id, model, category_id, accepting_offers } = listingDto;
    return listingDAO.createListing(
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
    );
  }
  updateListing(_id, listingDto) {
    const { listing_id, title, price, shipping, description, condition, thumbnail, photos, brand_id, model, category_id, accepting_offers } = listingDto;
    return listingDAO.updateListing(
        _id,
        listing_id, 
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
    );
  }
  unlist(_id, listingDto) {
    const { listing_id } = listingDto
    return listingDAO.unlist(_id, listing_id)
  }
  unlistMultiple(_id, listingIdArray) {
    return listingDAO.unlistMultiple(_id, listingIdArray)
  }
  getNewListings(page, limit) {
    return listingDAO.getNewListings(parseInt(page), parseInt(limit))
  }
  getListing(listing_id) {
    return listingDAO.getListing(listing_id)
  }
  deleteListing(_id, listingDto) {
    return listingDAO.deleteListing(listingDto.listing_id)
  }
  getUserListings(param) {
    const { user_id } = param
    return listingDAO.getUserListings(user_id)
  }
  getFilteredListings(queryDto) {
    const { searches, brands, categories, conditions, price_min, price_max, sold, page, limit } = queryDto
    return listingDAO.getFilteredListings( searches, brands, categories, conditions, price_min, price_max, sold, page, limit )
  }
}

module.exports = new ListingService();
