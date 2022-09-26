const messageService = require('../service/message')

class MessageController {
    async createMessage(req, res) {
        try {
            const id = await messageService.createMessage(req.body)
            res.status(201).json(id)
        } catch (e) {
            console.log(e)
        }
    }
    async getLastMessage(req, res) {
        try {
            const message = await messageService.getLastMessage(req.query)
            res.status(201).json(message)
        } catch (e) {
            console.log(e)
        }
    }
    async getMessagesByChat(req, res) {
        try {
            const messages = await messageService.getMessagesByChat(req.params)
            res.status(201).json(messages)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new MessageController()