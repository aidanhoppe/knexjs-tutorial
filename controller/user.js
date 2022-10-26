const jwt = require('jsonwebtoken')
const userService = require('../service/user');

class UserController {
  async createUser(req, res) {
    try {
      const id = await userService.createUser(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
      res.status(400).send(err)
    }
  }
  async login(req, res) {
    try {
      const result = await userService.login(req.body)
      if(result?.result == 'Success') {
        const token = jwt.sign({_id: user._id})
        req.header('auth-token', token).send(token)
        res.status(200).json(result)
      } else {
        res.status(400).send(result.result)
      }
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  }
  async getUser(req, res) {
    try {
        const user = await userService.getUser(req.params)
        res.status(201).json(user)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
  }
  async getUserFirebase(req, res) {
    try {
      const user = await userService.getUserFirebase(req.params)
      res.status(201).json(user)
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  }
  async updateUser(req, res) {
    try {
        await userService.updateUser(req.body)
        res.status(201)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
  }
  async updateUserShop(req, res) {
    try {
      const response = userService.updateUserShop(req.body)
      res.status(201).json(response)
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  }
  async addFeedQuery(req, res) {
    try {
      const response = userService.addFeedQuery(req.body)
      res.status(201).json(response)
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  }
}

module.exports = new UserController();
