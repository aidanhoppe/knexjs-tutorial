const db = require('../db/db');

class MessageDAO {
    async createMessage(chat_id, sender_id, body) {
        const [id] = await db('message')
        .insert({
            chat_id,
            sender_id,
            body
        }).returning('message_id')
        return id
    }
    async getLastMessage(chat_id) {
        const [message] = await db('message')
        .where('chat_id', chat_id)
        .select()
        .orderBy('updated_at', 'desc')
        .limit(1)
        return message
    }
    async getMessagesByChat(chat_id) {
        const messages = await db('message')
        .where('chat_id', chat_id)
        .select()
        .orderBy('updated_at', 'desc')
        return messages
    }
}

module.exports = new MessageDAO();