const followDAO = require('../dao/follow');

class FollowService {
  createFollow(followDto) {
    const { follower, followee } = followDto;
    return followDAO.createFollow(follower, followee);
  }
  getFollow(followDto) {
    const { follower, followee } = followDto
    return followDAO.getFollow(follower, followee)
  }
}

module.exports = new FollowService();
