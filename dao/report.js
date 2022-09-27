const db = require('../db/db');

class ReportDAO {
  async createReport(offender, reporter, category, details) {
    const [id] = await db('address')
      .insert({
        offender,
        reporter,
        category,
        details
      })
      .returning('report_id');
    return id;
  }
}

module.exports = new ReportDAO();
