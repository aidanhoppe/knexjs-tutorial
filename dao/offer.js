const db = require('../db/db');

class OfferDAO {
    async createOffer(chat_id, price) {
        const [id] = await db('offer')
        .insert({
            chat_id,
            price
        }).returning('offer_id')
        return id
    }
    async getLastOffer(chat_id) {
        const [offer] = await db('offer')
        .where('chat_id', chat_id)
        .select()
        .orderBy('updated_at', 'desc')
        .limit(1)
        return offer
    }
    async getOffersByChat(chat_id) {
        const offers = await db('offer')
        .where('chat_id', chat_id)
        .select()
        .orderBy('updated_at', 'desc')
        return offers
    }
    async updateOffer(offer_id, status) {
        const result = await db('offer')
        .where('offer_id', offer_id)
        .update({
            status
        }).returning('status')
        return result
    }
}

module.exports = new OfferDAO();