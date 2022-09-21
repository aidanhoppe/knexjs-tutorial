const saveDAO = require('../dao/save');

class SaveService {
  createSave(saveDto) {
    const { user_id, listing_id } = saveDto;
    return saveDAO.createSave(
        user_id, 
        listing_id
    );
  }
  deleteSave(saveParam, saveBody) {
    const listing_id = saveParam.listing_id
    const user_id = saveBody.user_id
    return saveDAO.deleteSave(
        user_id,
        listing_id
    )
  }
  getSavedBool(saveDto) {
    const { listing_id, user_id } = saveDto
    return saveDAO.getSavedBool(
        listing_id,
        user_id
    )
  }
}

module.exports = new SaveService();
