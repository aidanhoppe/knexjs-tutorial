const listingService = require('../service/listing');

class ListingController {
  async createListing(req, res) {
    try {
      const id = await listingService.createListing(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
  async getNewListings(req, res) {
    try {
      const listings = await listingService.getNewListings(req.query.page, req.query.limit)
      console.log('listings from controller: ', listings)
      res.status(201).json(listings)
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new ListingController();
