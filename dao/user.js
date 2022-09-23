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
    async getUser(user_id) {
        //DELETE later
        console.log(user_id)
        const [user] = await db('user')
        .where('user_id', user_id).select()
        return user
    }
    async getUserFirebase(firebase_id) {
        const [user] = await db('user')
        .where('firebase_id', firebase_id).select()
        return user
    }
    async updateUser(user_id, first_name, last_name, email, verified_email, phone, verified_phone, shop_name, address_id) {
        await db('user')
        .where('user_id', user_id)
        .update({
            first_name, 
            last_name, 
            email, 
            verified_email, 
            phone, 
            verified_phone, 
            shop_name, 
            address_id
        })
    }
    async getUserListings(user_id) {
        //DELETE later
        console.log(user_id)
        const listings = await db('listing')
        .where('seller_id', user_id)
        .andWhere('status', 'Active')
        .orderBy('created_at', 'desc')
        .select()
        return listings
    }
}

module.exports = new UserDAO();
