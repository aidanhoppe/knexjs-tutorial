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
  getNewListings(page, limit) {
    return listingDAO.getNewListings(parseInt(page), parseInt(limit))
  }
  getListing(listing_id) {
    return listingDAO.getListing(listing_id)
  }
  deleteListing(listing_id) {
    return listingDAO.deleteListing(listing_id)
  }
  getUserListings(param) {
    const { user_id } = param
    return listingDAO.getUserListings(user_id)
  }
}

module.exports = new ListingService();
