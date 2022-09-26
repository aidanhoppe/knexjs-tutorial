const chatService = require('../service/chat')

class ChatController {
    async getChats(req, res) {
        try {
            const chats = await chatService.getChats(req.params)
            res.status(201).json(chats)
        } catch (e) {
            console.log(e)
        }
    }
    async createChat(req, res) {
        try {
            const id = await chatService.createChat(req.body)
            res.status(201).json(id)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new ChatController()