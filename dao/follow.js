const db = require('../db/db');

class FollowDAO {
  async createFollow(follower, followee) {
    console.log('follower: ', follower, " followee: ", followee)
    const result = await db('follow')
      .insert({
        follower,
        followee
      })
    return result;
  }
  async getFollow(follower, followee) {
    //DELETE later
    console.log("get follow -- follower: ", follower, " followee: ", followee)
    const [result] = await db('follow')
    .where('follower', follower)
    .andWhere('followee', followee)
    .select()
    return result
  }
  async deleteFollow(follower, followee) {
    //DELETE later
    console.log("delete follow -- follower: ", follower, " followee: ", followee)
    const [result] = await db('follow')
    .where('follower', follower)
    .andWhere('followee', followee)
    .del(['follower', 'followee'])
    return result
  }
}

module.exports = new FollowDAO();
