const express = require('express');
const personController = require('../controller/person');
const listingController = require('../controller/listing')

const router = express.Router();
router.post('/person', personController.createPerson);
router.post('/listing', listingController.createListing);

module.exports = router;
