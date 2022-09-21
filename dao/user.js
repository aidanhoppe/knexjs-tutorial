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
    async getUser(firebase_id) {
        console.log('DAO, firebase_id: ', firebase_id)
        const [user] = await db('user')
        .where('firebase_id', firebase_id).select()
        return user
    }
}

module.exports = new UserDAO();
