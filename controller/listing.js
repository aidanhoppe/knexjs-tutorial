const listingService = require('../service/listing');

class ListingController {
  async createListing(req, res) {
    //Confirm seller matches token
    if(req.body.seller_id != req.user._id) return res.status(401).send('You can only update your own listings')

    try {
      const id = await listingService.createListing(req.body);
      res.status(201).json(id);
    } catch (e) {
      console.error(e);
      res.status(400).send(e)
    }
  }
  async updateListing(req, res) {
    try {
      const id = await listingService.updateListing(req.user._id, req.body)
      res.status(201).json(id)
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  }
  async getNewListings(req, res) {
    try {
      const listings = await listingService.getNewListings(req.query.page, req.query.limit)
      res.status(201).json(listings)
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  }
  async getListing(req, res) {
    try {
      const listing = await listingService.getListing(req.query.listing_id)
      res.status(201).json(listing)
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  }
  async getUserListings(req, res) {
    try {
      const listings = await listingService.getUserListings(req.params)
      res.status(201).json(listings)
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  }
  async deleteListing(req, res) {
    try {
      const id = await listingService.deleteListing(req.user._id, req.body)
      res.status(201).json(id)
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  }
  async unlist(req, res) {
    try {
      const id = await listingService.unlist(req.user._id, req.query)
      res.status(201).json(id)
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  }
  async unlistMultiple(req, res) {
    try {
      const result = await listingService.unlistMultiple(req.user._id, req.body)
      res.status(201).json(result)
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  }
  async getFilteredListings(req, res) {
    try {
      const result = await listingService.getFilteredListings(req.query)
      res.status(201).json(result)
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  }
}

module.exports = new ListingController();
