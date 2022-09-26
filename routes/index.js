const express = require('express');
const listingController = require('../controller/listing');
const addressController = require('../controller/address');
const userController = require('../controller/user');
const brandController = require('../controller/brand');
const categoryController = require('../controller/category');
const saveController = require('../controller/save')
const followController = require('../controller/follow')
const payoutController = require('../controller/payout')
const available_payoutController = require('../controller/available_payout')
const chatController = require('../controller/chat')
const messageController = require('../controller/message')
const offerController = require('../controller/offer')
const { generateUploadURL } = require('../s3')

const router = express.Router();
router.post('/listing', listingController.createListing);
router.get('/listing', listingController.getListing)
router.get('/listing/new_listings', listingController.getNewListings)
router.get('/s3Url', async (req, res) => {
    const url = await generateUploadURL()
    res.send({url})
})
router.post('/address', addressController.createAddress)
router.post('/brand', brandController.createBrand)
router.post('/category', categoryController.createCategory)

router.post('/user', userController.createUser)
router.get('/user/:user_id', userController.getUser)
router.get('/user/:firebase_id/firebase', userController.getUserFirebase)
router.put('/user/:firebase_id', userController.updateUser)
router.get('/user/:user_id/listings', userController.getUserListings)

router.post('/save', saveController.createSave)
router.delete('/save/:listing_id/:user_id', saveController.deleteSave)
router.get('/save/user/:user_id', saveController.getUserSaves)
router.get('/save/:listing_id/:user_id', saveController.getSaveId)

router.get('/follow/:follower/:followee', followController.getFollow)
router.post('/follow', followController.createFollow)
router.delete('/follow', followController.deleteFollow)

router.put('/payout/reset', payoutController.updatePayout)
router.get('/payout/:user_id', payoutController.getPayout)
router.post('/payout', payoutController.createPayout)

router.put('/available_payout/reset', available_payoutController.resetPayout)
router.post('/available_payout', available_payoutController.createPayout)
router.get('/available_payout', available_payoutController.getPayout)
router.put('/available_payout/add', available_payoutController.addToPayout)
// router.post('/available_payout/execute', available_payoutController.executePayout)

router.get('/chat/:user_id', chatController.getChats)
router.post('/chat', chatController.createChat)

router.post('/message', messageController.createMessage)
router.get('/message/last', messageController.getLastMessage)
router.get('/message/chat/:chat_id', messageController.getMessagesByChat)

router.post('/offer', offerController.createOffer)
router.get('/offer/chat/:chat_id', offerController.getOffersByChat)
router.get('/offer/last', offerController.getLastOffer)
module.exports = router;
