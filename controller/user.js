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
        res.status(201).json(user)
    } catch (e) {
        console.log(e)
    }
  }
  async getUserFirebase(req, res) {
    try {
      const user = await userService.getUserFirebase(req.params)
      res.status(201).json(user)
    } catch (e) {
      console.log(e)
    }
  }
  async updateUser(req, res) {
    try {
        await userService.updateUser(req.body)
        res.status(201)
    } catch (e) {
        console.log(e)
    }
  }
  async updateUserShop(req, res) {
    try {
      const response = userService.updateUserShop(req.body)
      res.status(201).json(response)
    } catch (e) {
      console.log(e)
    }
  }
  async addFeedQuery(req, res) {
    try {
      const response = userService.addFeedQuery(req.body)
      res.status(201).json(response)
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new UserController();
