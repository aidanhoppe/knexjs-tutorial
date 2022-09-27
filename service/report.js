const reportDAO = require('../dao/report');

class ReportService {
  createReport(reportDto) {
    const { offender, reporter, category, details } = reportDto;
    return reportDAO.createReport(
        offender,
        reporter,
        category,
        details
    );
  }
}

module.exports = new ReportService();
