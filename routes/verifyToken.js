const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    const token = req.header('auth-token')
    if(!token) return res.status(401).send('Access Denied')

    try {
        // const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        const verified = jwt.verify(token, '7483ae193072664e34e3fd6432a4ad183d132b99c81174989f88db393ec29c5f')
        req.user = verified
    } catch (e) {
        console.log(e)
        res.status(400).send('Invalid Token')
    }
}