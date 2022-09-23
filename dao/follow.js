const db = require('../db/db');

class FollowDAO {
  async createFollow(follower, followee) {
    console.log('follower: ', follower, " followee: ", followee)
    const result = await db('follow')
      .insert({
        follower,
        followee
      })
    return result>0;
  }
  async getFollow(follower, followee) {
    const result = await db('follow')
    .where('follower', follower)
    .andWhere('followee', followee)
    .select()
    return result
  }
}

module.exports = new FollowDAO();
