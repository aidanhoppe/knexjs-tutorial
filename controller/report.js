const reportService = require('../service/report');

class ReportController {
  async createReport(req, res) {
    try {
      const id = await reportService.createReport(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new ReportController();
