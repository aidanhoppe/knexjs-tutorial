const saveService = require('../service/save');

class SaveController {
  async createSave(req, res) {
    try {
      const id = await saveService.createSave(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
  async deleteSave(req, res) {
    try {
        const id = await saveService.deleteSave(req.params, req.body)
        res.status(201).json(id)
    } catch (e) {
        console.log(e)
    }
  }
}

module.exports = new SaveController();