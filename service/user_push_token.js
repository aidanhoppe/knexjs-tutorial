const UserPushTokenDAO = require("../dao/user_push_token");

class UserPushTokenService {
  async alterPushTokens(tokenDto) {
    const { user_id, op, push_token } = tokenDto;

    if (op == "add") {
      return UserPushTokenDAO.addPushToken(user_id, push_token);
    } else if (op == "remove") {
      return UserPushTokenDAO.removePushToken(user_id, push_token);
    }
  }
}

module.exports = new UserPushTokenService();
