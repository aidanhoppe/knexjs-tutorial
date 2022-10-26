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
  async getCategories(req, res) {
    try {
      const categories = await categoryService.getCategories()
      res.status(200).json(categories)
    } catch (e) {
      console.error(e)
    }
  }
}

module.exports = new CategoryController();
