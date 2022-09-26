const chatDAO = require('../dao/chat');

class ChatService {
  getChats(chatDto) {
    const { user_id } = chatDto;
    return chatDAO.getChats(
        user_id
    );
  }
  createChat(chatDto) {
    const { seller_id, buyer_id, listing_id  } = chatDto
    return chatDAO.createChat(
        seller_id,
        buyer_id,
        listing_id
    )
  }
}

module.exports = new ChatService();
