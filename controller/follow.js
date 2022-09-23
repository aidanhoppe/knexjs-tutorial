const followService = require('../service/follow');

class FollowController {
  async createFollow(req, res) {
    try {
      const id = await followService.createFollow(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
  async getFollow(req, res) {
    try {
      const result = await followService.getFollow(req.params)
      res.status(201).json(result)
    } catch (e) {
      console.log(e)
    }
  }
  async deleteFollow(req, res) {
    try {
      const result = await followService.deleteFollow(req.body)
      res.status(201).json(result)
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new FollowController();
