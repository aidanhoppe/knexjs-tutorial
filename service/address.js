const addressDAO = require('../dao/address');

class AddressService {
  createListing(addressDto) {
    const { street_address_1, street_address_2, city, state, zipcode, country } = addressDto;
    return addressDAO.createAddress(
        street_address_1, 
        street_address_2, 
        city, 
        state, 
        zipcode, 
        country
    );
  }
}

module.exports = new AddressService();
