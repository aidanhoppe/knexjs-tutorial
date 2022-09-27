const cartDAO = require('../dao/cart');

class CartService {
  createCart(cartDto) {
    const { listing_id, user_id, price } = cartDto;
    return cartDAO.createCart(
        listing_id,
        user_id,
        price
    );
  }
}

module.exports = new CartService();
