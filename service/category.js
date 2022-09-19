const categoryDAO = require('../dao/category');

class CategoryService {
  createCategory(categoryDto) {
    const { name } = categoryDto;
    return categoryDAO.createCategory(
        name
    );
  }
}

module.exports = new CategoryService();
