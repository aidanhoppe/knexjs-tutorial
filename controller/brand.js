const brandService = require('../service/brand');

class BrandController {
  async createBrand(req, res) {
    try {
      const id = await brandService.createBrand(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new BrandController();
