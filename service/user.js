const userDAO = require('../dao/user');

class UserService {
  createUser(userDto) {
    const { first_name, last_name, email, password } = userDto;
    return userDAO.createUser(
        first_name, 
        last_name, 
        email,
        password
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
  async addFeedQuery(userDto) {
    const {user_id, queries} = userDto
    return userDAO.addFeedQuery(user_id, queries)
  }
}

module.exports = new UserService();
