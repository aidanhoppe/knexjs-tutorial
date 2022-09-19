const userDAO = require('../dao/user');

class UserService {
  createUser(userDto) {
    const { first_name, last_name, email } = userDto;
    return userDAO.createUser(
        first_name, 
        last_name, 
        email
    );
  }
}

module.exports = new UserService();
