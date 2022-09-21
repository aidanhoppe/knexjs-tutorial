const express = require('express');
const listingController = require('../controller/listing');
const addressController = require('../controller/address');
const userController = require('../controller/user');
const brandController = require('../controller/brand');
const categoryController = require('../controller/category');
const { generateUploadURL } = require('../s3')

const router = express.Router();
router.post('/listing', listingController.createListing);
router.get('/s3Url', async (req, res) => {
    const url = await generateUploadURL()
    res.send({url})
})
router.post('/address', addressController.createAddress)
router.post('/user', userController.createUser)
router.post('/brand', brandController.createBrand)
router.post('/category', categoryController.createCategory)
router.get('/user/:firebase_id', userController.getUser)
module.exports = router;
