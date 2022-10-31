const UserPushTokenService = require("../service/user_push_token");

class UserPushTokenController {
  async alterPushTokens(req, res) {
    try {
      const result = await UserPushTokenService.alterPushTokens(req.body);
      res.status(201).json(result);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new UserPushTokenController();
