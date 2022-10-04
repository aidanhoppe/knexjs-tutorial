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
  async updateListing(req, res) {
    try {
      const id = await listingService.updateListing(req.body)
      res.status(201).json(id)
    } catch (e) {
      console.log(e)
    }
  }
  async getNewListings(req, res) {
    try {
      const listings = await listingService.getNewListings(req.query.page, req.query.limit)
      res.status(201).json(listings)
    } catch (e) {
      console.log(e)
    }
  }
  async getListing(req, res) {
    try {
      const listing = await listingService.getListing(req.query.listing_id)
      res.status(201).json(listing)
    } catch (e) {
      console.log(e)
    }
  }
  async getUserListings(req, res) {
    try {
      const listings = await listingService.getUserListings(req.params)
      res.status(201).json(listings)
    } catch (e) {
      console.log(e)
    }
  }
  async deleteListing(req, res) {
    try {
      const id = await listingService.deleteListing(req.body)
      res.status(201).json(id)
    } catch (e) {
      console.log(e)
    }
  }
  async unlistMultiple(req, res) {
    try {
      console.log(req.body)
      const result = await listingService.unlistMultiple(req.body)
      res.status(201).json(result)
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new ListingController();
