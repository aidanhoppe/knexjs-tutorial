const db = require('../db/db');

class UserDAO {
  async createUser(first_name, last_name, email) {
    const [id] = await db('user')
      .insert({
        first_name, 
        last_name, 
        email
      })
      .returning('user_id');

    return id;
  }
}

module.exports = new UserDAO();
