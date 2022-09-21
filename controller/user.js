const userService = require('../service/user');

class UserController {
  async createUser(req, res) {
    try {
      const id = await userService.createUser(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
  async getUser(req, res) {
    try {
        const user = await userService.getUser(req.params)
        console.log('Controller user: ', user)
        res.status(201).json(user)
    } catch (e) {
        console.log(e)
    }
  }
}

module.exports = new UserController();
