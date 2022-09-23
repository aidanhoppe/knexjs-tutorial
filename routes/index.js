const express = require('express');
const listingController = require('../controller/listing');
const addressController = require('../controller/address');
const userController = require('../controller/user');
const brandController = require('../controller/brand');
const categoryController = require('../controller/category');
const saveController = require('../controller/save')
const followController = require('../controller/follow')
const { generateUploadURL } = require('../s3')

const router = express.Router();
router.post('/listing', listingController.createListing);
router.get('/s3Url', async (req, res) => {
    const url = await generateUploadURL()
    res.send({url})
})
router.post('/address', addressController.createAddress)
router.post('/brand', brandController.createBrand)
router.post('/category', categoryController.createCategory)

router.post('/user', userController.createUser)
router.get('/user/:firebase_id', userController.getUser)
router.put('/user/:firebase_id', userController.updateUser)
router.get('/user/:user_id/listings', userController.getUserListings)

router.post('/save', saveController.createSave)
router.delete('/save/:listing_id', saveController.deleteSave)
router.get('/save/:listing_id/:user_id', saveController.getSaveId)

router.get('/follow', followController.getFollow)
router.post('/follow', followController.createFollow)
router.delete('/follow', followController.deleteFollow)
module.exports = router;
