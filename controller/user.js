const jwt = require('jsonwebtoken')
const userService = require('../service/user');

class UserController {
  async createUser(req, res) {
    try {
      const result = await userService.createUser(req.body)
      if(!result?.error) {
        //TODO replace with env variable
        console.log('result: ', result)
        const token = jwt.sign({_id: result.user_id}, '7483ae193072664e34e3fd6432a4ad183d132b99c81174989f88db393ec29c5f')
        res.status(201).header('auth-token', token).json({user_id: result.user_id, token});
      } else {
        return res.status(400).json(result)
      }
    } catch (err) {
      console.error(err);
      res.status(400).send(err)
    }
  }
  async login(req, res) {
    try {
      const result = await userService.login(req.body)
      if(result?.result == 'Success') {
        //TODO replace with env variable
        const token = jwt.sign({_id: result.user_id}, '7483ae193072664e34e3fd6432a4ad183d132b99c81174989f88db393ec29c5f')
        res.status(200).header('auth-token', token).json({user_id: result.user_id, token})
      } else {
        res.status(400).json(result)
      }
    } catch (e) {
      console.log(e)
      res.status(400).json(result)
    }
  }
  async getUser(req, res) {
    try {
        const user = await userService.getUser(req.params)
        res.status(200).json(user)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
  }
  // async getUserFirebase(req, res) {
  //   try {
  //     const user = await userService.getUserFirebase(req.params)
  //     res.status(201).json(user)
  //   } catch (e) {
  //     console.log(e)
  //     res.status(400).send(e)
  //   }
  // }
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
