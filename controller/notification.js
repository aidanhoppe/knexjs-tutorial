const notificationService = require('../service/notification')

class NotificationController {
    async sendNotification(req, res) {
        try {
            const result = await notificationService.sendNotification(req.body)
            res.status(201).json(result)
        } catch (e) {
            console.log(e)
        }
    }
}   

module.exports = new NotificationController()
