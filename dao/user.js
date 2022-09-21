const db = require('../db/db');

class UserDAO {
  async createUser(firebase_id, first_name, last_name, email) {
    const [id] = await db('user')
      .insert({
        firebase_id,
        first_name, 
        last_name, 
        email
      })
      .returning('user_id');

    return id;
  }
}

module.exports = new UserDAO();
