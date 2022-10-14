const categoryDAO = require('../dao/category');

class CategoryService {
  createCategory(categoryDto) {
    const { name } = categoryDto;
    return categoryDAO.createCategory(
        name
    );
  }
  getCategories() {
    return categoryDAO.getCategories()
  }
}

module.exports = new CategoryService();
