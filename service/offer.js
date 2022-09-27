const offerDAO = require('../dao/offer');

class OfferService {
    createOffer(offerDto) {
        const { chat_id, price } =  offerDto
        return offerDAO.createOffer(chat_id, price)
    }
    getLastOffer(offerDto) {
        const { chat_id } = offerDto
        return messageDAO.getLastOffer(chat_id)
    }
    getOffersByChat(offerDto) {
        const { chat_id } = offerDto
        return offerDAO.getOffersByChat(chat_id)
    }
    updateOffer(offerDto) {
        const { offer_id, status } = offerDto
        return offerDAO.updateOffer(offer_id, status)
    }
}

module.exports = new OfferService();
