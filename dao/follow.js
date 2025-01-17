const db = require('../db/db');

class FollowDAO {
  async createFollow(follower, followee) {
    const result = await db('follow')
      .insert({
        follower,
        followee
      })
    return result;
  }
  async getFollow(follower, followee) {
    const [result] = await db('follow')
    .where('follower', follower)
    .andWhere('followee', followee)
    .select()
    return result
  }
  async deleteFollow(follower, followee) {
    const [result] = await db('follow')
    .where('follower', follower)
    .andWhere('followee', followee)
    .del(['follower', 'followee'])
    return result
  }
}

module.exports = new FollowDAO();
