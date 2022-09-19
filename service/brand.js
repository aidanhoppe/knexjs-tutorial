const brandDAO = require('../dao/brand');

class BrandService {
  createBrand(brandDto) {
    const { submitted_by, name } = brandDto;
    return brandDAO.createBrand(
        submitted_by,
        name
    );
  }
}

module.exports = new BrandService();
