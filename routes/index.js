const express = require('express');
const personController = require('../controller/person');
const listingController = require('../controller/listing');
const {generateUploadURL} = require('./s3.js')

const router = express.Router();
router.post('/person', personController.createPerson);
router.post('/listing', listingController.createListing);
router.get('/s3Url', async (req, res) => {
    const url = await generateUploadURL
    res.send({url})
})

module.exports = router;
