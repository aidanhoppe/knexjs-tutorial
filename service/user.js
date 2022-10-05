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
    const { user_id } = userDto
    const user = await userDAO.getUser(user_id)
    return user
  }
  async getUserFirebase(userDto) {
    const { firebase_id } = userDto
    const user = await userDAO.getUserFirebase(firebase_id)
    return user
  }
  async updateUser(userDto) {
    const {user_id, first_name, last_name, email, verified_email, phone, verified_phone, shop_name, address_id} = userDto
    userDAO.updateUser(
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
  async updateUserShop(userDto) {
    const { user_id, shop_photo, shop_name, shop_policy, default_shipping, address_id } = userDto
    return userDAO.updateUserShop(
      user_id,
      shop_photo,
      shop_name,
      shop_policy,
      default_shipping,
      address_id
    )
  }
}

module.exports = new UserService();
