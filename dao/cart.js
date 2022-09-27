const db = require('../db/db');

class CartDAO {
  async createCart(listing_id, user_id, price) {
    const item = await db('cart')
    .where('listing_id', listing_id)
    .andWhere('user_id', user_id)
    .del()
    //May want to add functionality about keeping lowest price instead of defaulting to newest
    const [id] = await db('cart')
        .insert({
        listing_id,
        user_id,
        price
        })
        .returning('cart_id');

    return id;
  }
}

module.exports = new CartDAO();
