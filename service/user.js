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
  async getUser(userDto) {
    const { firebase_id } = userDto
    const user = await userDAO.getUser(firebase_id)
    console.log('Service user: ', user)
    return user
  }
  async updateUser(userDto) {
    const {user_id, first_name, last_name, email, verified_email, phone, verified_phone, shop_name, address_id} = userDto
    return userDAO.updateUser(
        user_id,
        first_name, 
        last_name, 
        email, 
        verified_email, 
        phone, 
        verified_phone, 
        shop_name, 
        address_id
    )
  }
}

module.exports = new UserService();
