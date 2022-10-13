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
  async updateBrandStatus(req, res) {
    try {
      const id = await brandService.updateBrandStatus(req.body)
      res.status(201).json(id)
    } catch (e) {
      console.error(e)
    }
  }
  async getApprovedBrands(req, res) {
    try {
      const brands = await brandService.getApprovedBrands()
      res.status(200).json(brands)
    } catch (e) {
      console.error(e)
    }
  }
}

module.exports = new BrandController();
