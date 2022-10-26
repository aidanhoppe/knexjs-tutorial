const db = require('../db/db');
const bcrypt = require('bcryptjs')

class UserDAO {
    async createUser(first_name, last_name, email, password) {
        const [id] = await db('user')
        .insert({
            first_name, 
            last_name, 
            email,
            password
        })
        .returning('user_id');

        return id;
    }
    async login(email, password) {
        const [result] = await db('user')
        .where('email', email)
        .returning(['user_id'])

        // if(!result) return res.status(400).send('Email or password is incorrect.')
        if(!result) return {result: 'Email or password is incorrect'}

        const validPass = await bcrypt.compare(password, result.password)
        // if(!validPass) return res.status(400).send('Email or password is incorrect.')
        if(!validPass) return {result: 'Email or password is incorrect'}

        return {user_id: result.user_id, result: 'Success'}
    }
    async getUser(user_id) {
        const [user] = await db('user')
        .where('user_id', user_id).select()
        return user
    }
    // async getUserFirebase(firebase_id) {
    //     const [user] = await db('user')
    //     .where('firebase_id', firebase_id).select()
    //     return user
    // }
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
            address_id,
            updated_at: new Date()
        })
    }
    async addFeedQuery(user_id, queries) {
        await db('user')
        .where('user_id', user_id)
        .insert([...queries])
    }
    async updateUserShop(user_id, shop_photo, shop_name, shop_policy, default_shipping, address_id) {
        await db('user')
        .where('user_id', user_id)
        .update({
            shop_photo,
            shop_name,
            shop_policy,
            default_shipping,
            address_id,
            updated_at: new Date()
        })
    }
}

module.exports = new UserDAO();
