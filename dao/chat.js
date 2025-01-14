const { andWhere } = require('../db/db');
const db = require('../db/db');

class ChatDAO {
  async getChats(user_id) {
    const chats = await db('chat')
    .where('buyer_id', user_id)
    .orWhere('seller_id', user_id)
    .select()
    .orderBy('updated_at', 'desc')
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
  async getChat(buyer_id, seller_id, listing_id) {
    const [chat] = await db('chat')
    .where('buyer_id', buyer_id)
    .andWhere('seller_id', seller_id)
    .andWhere('listing_id', listing_id)
    .select()
    return chat
  }
  // async updateLastViewer(chat_id, last_viewer) {
  //   //TODO remove deprecated last_viewer
  //   console.log('chat_id: ', chat_id, "  last_viewer: ", last_viewer)
  //   const [result] = await db('chat')
  //   .where('chat_id', chat_id)
  //   .update({
  //       last_viewer,
  //       updated_at: new Date()
  //   })
  //   return result
  // }
  async updateTimestamp(chat_id, last_viewed_buyer, last_viewed_seller) {
    const knexQuery = await db('chat')
    .where('chat_id', chat_id)

    if(last_viewed_buyer) {
      knexQuery.update({
          last_viewed_buyer,
          updated_at: new Date()
      })
    }
    if(last_viewed_seller) {
      knexQuery.update({
          last_viewed_seller,
          updated_at: new Date()
      })
    }
    return [knexQuery]
  }
}

module.exports = new ChatDAO();
