const addressService = require('../service/address');

class AddressController {
  async createAddress(req, res) {
    try {
      const id = await addressService.createAddress(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new AddressController();
