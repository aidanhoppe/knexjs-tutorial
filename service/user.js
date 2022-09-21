const userDAO = require('../dao/user');

class UserService {
  createUser(userDto) {
    const { firebase_id, first_name, last_name, email } = userDto;
    return userDAO.createUser(
        firebase_id,
        first_name, 
        last_name, 
        email
    );
  }
  getUser(userDto) {
    // console.log(userDto)
    const { firebase_id } = userDto
    return userDAO.getUser(firebase_id)
  }
}

module.exports = new UserService();
