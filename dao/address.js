const db = require('../db/db');

class AddressDAO {
  async createAddress(street_address_1, street_address_2, city, state, zipcode, country) {
    const [id] = await db('address')
      .insert({
        street_address_1, 
        street_address_2, 
        city, 
        state, 
        zipcode, 
        country
      })
      .returning('address_id');

    return id;
  }
}

module.exports = new AddressDAO();
