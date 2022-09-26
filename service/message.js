const messageDAO = require('../dao/message');

class MessageService {
    createMessage(messageDto) {
        const { chat_id, sender_id, body } =  messageDto
        return messageDAO.createMessage(chat_id, sender_id, body)
    }
    getLastMessage(messageDto) {
        const { chat_id } = messageDto
        return messageDAO.getLastMessage(chat_id)
    }
    getMessagesByChat(messageDto) {
        const { chat_id } = messageDto
        return messageDAO.getMessagesByChat(chat_id)
    }
}

module.exports = new MessageService();
