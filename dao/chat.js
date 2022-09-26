const db = require('../db/db');

class ChatDAO {
  async getChats(user_id) {
    const chats = await db('chat')
    .where('buyer_id', user_id)
    .orWhere('seller_id', user_id)
    .select()
    return chats;
  }
  async createChat(seller_id, buyer_id, listing_id) {
    const [id] = await db('chat')
    .insert({
        seller_id,
        buyer_id,
        listing_id
    }).returning('chat_id')
    return id
  }
}

module.exports = new ChatDAO();
