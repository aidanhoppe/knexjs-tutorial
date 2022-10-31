const db = require("../db/db");

class UserPushTokenDAO {
  async getUserPushTokens(user_id) {
    const response = await db("user_push_token")
      .where("user_id", user_id)
      .select("push_token");
    return response;
  }

  async addPushToken(user_id, push_token) {
    const [response] = await db("user_push_token")
      .insert({
        user_id,
        push_token,
      })
      .returning(["user_id", "push_token"]);
    return response;
  }

  async removePushToken(user_id, push_token) {
    const response = await db("user_push_token")
      .where("user_id", user_id)
      .andWhere("push_token", push_token)
      .del(["user_id", "push_token"]);
    return response;
  }
}

module.exports = new UserPushTokenDAO();
