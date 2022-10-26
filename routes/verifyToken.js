const jwt = require('jsonwebtoken')

function verifyUser (req, res, next) {
    const token = req.header('auth-token')
    if(!token) return res.status(401).send('Access Denied')

    try {
        // const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        const verified = jwt.verify(token, '7483ae193072664e34e3fd6432a4ad183d132b99c81174989f88db393ec29c5f')
        req.user = verified
        next()
    } catch (e) {
        console.log(e)
        res.status(400).send('Invalid Token')
    }
}

function verifyAdmin (req, res, next) {
    const token = req.header('auth-token')
    if(!token) return res.status(401).send('Access Denied')
    try {
        // const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        const verified = jwt.verify(token, '7483ae193072664e34e3fd6432a4ad183d132b99c81174989f88db393ec29c5f')
        req.user = verified
        // if(req.user == process.env.ADMIN_ID)
        if(req.user._id != '1') return res.status(401).send('Access Denied')
        next()
    } catch (e) {
        console.log(e)
        res.status(400).send('Invalid Token')
    }
}

module.exports.verifyUser = verifyUser;
module.exports.verifyAdmin = verifyAdmin;