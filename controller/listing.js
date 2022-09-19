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
}

module.exports = new ListingController();
