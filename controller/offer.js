const offerService = require('../service/offer')

class OfferController {
    async createOffer(req, res) {
        try {
            const id = await offerService.createOffer(req.body)
            res.status(201).json(id)
        } catch (e) {
            console.log(e)
        }
    }
    async getLastOffer(req, res) {
        try {
            const offer = await offerService.getLastOffer(req.query)
            res.status(201).json(offer)
        } catch (e) {
            console.log(e)
        }
    }
    async getOffersByChat(req, res) {
        try {
            const offers = await offerService.getOffersByChat(req.params)
            res.status(201).json(offers)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new OfferController()