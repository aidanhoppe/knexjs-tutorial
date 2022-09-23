const db = require('../db/db');

class FollowDAO {
  async createFollow(follower, followee) {
    const [id] = await db('follow')
      .insert({
        follower,
        followee
      })
    return true;
  }
  async getFollow(follower, followee) {
    const result = await db('follow')
    .where('follower', follower)
    .andWhere('followee', followee)
    .select()
  }
}

module.exports = new FollowDAO();
