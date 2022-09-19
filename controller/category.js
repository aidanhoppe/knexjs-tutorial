const categoryService = require('../service/category');

class CategoryController {
  async createCategory(req, res) {
    try {
      const id = await categoryService.createCategory(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new CategoryController();
