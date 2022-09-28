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
  getChat(chatDto) {
    const { buyer_id, seller_id, listing_id } = chatDto
    return chatDAO.getChat(
        buyer_id,
        seller_id,
        listing_id
    )
  }
  updateLastViewer(chatDto) {
    const { chat_id, last_viewer } = chatDto
    return chatDAO.updateLastViewer(chat_id, last_viewer)
  }
  updateTimestamp(chatDto) {
    const { chat_id, last_viewer, last_updater } = chatDto
    return chatDAO.updateTimestamp(chat_id, last_viewer, last_updater)
  }
}

module.exports = new ChatService();
