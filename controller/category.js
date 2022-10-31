const categoryService = require('../service/category');

class CategoryController {
  async createCategory(req, res) {
    try {
      const id = await categoryService.createCategory(req.body);
      res.status(201).json(id);
    } catch (e) {
      console.error(e);
      res.status(400).send(e)
    }
  }
  async getCategories(req, res) {
    try {
      const categories = await categoryService.getCategories()
      res.status(200).json(categories)
    } catch (e) {
      console.error(e)
      res.status(400).send(e)
    }
  }
}

module.exports = new CategoryController();
