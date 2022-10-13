const brandDAO = require('../dao/brand');

class BrandService {
  createBrand(brandDto) {
    const { submitted_by, name } = brandDto;
    return brandDAO.createBrand(
        submitted_by,
        name
    );
  }
  updateBrandStatus(brandDto) {
    const { brand_id, status } = brandDto
    return brandDAO.updateBrandStatus(
      brand_id,
      status
    )
  }
  getApprovedBrands() {
    return brandDAO.getApprovedBrands()
  }
}

module.exports = new BrandService();
