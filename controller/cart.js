const cartService = require('../service/cart');

class CartController {
  async createCart(req, res) {
    try {
      const id = await cartService.createCart(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new CartController();
