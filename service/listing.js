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
    return listingDAO.getLisitng(listing_id)
  }
}

module.exports = new ListingService();
