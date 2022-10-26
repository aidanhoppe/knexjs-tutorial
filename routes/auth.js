const router = require('express').Router();
const userController = require('../controller/user')
const { registerValidation, loginValidation } = require('../validation/account_validation');
const bcrypt = require('bcryptjs')

router.post('/register', async (req, res) => {
    const { error } = registerValidation(req.body)
    if(error) return res.status(400).send({error: error.details[0].message})

    
    //Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    req.body.password = hashPassword
    console.log('req.body after hashing: ', req.body)

    //TODO
    //VERIFY EMAIL BELONGS TO USER HERE -- WAIT UNTIL EMAIL CONFIRMED THEN CREATE USER

    //Trying things
    // const response = await userController.createUser(req, res)
    return userController.createUser(req, res)

    //Move all above to user or just create user in database here.
    // res.send('Register')
})

router.post('/login', (req, res) => {
    const { error } = loginValidation(req.body)
    if(error) return res.status(400).send({error: error.details[0].message})

    //Link to user
    return userController.login(req, res)
    // res.send('Login')
})
// router. post('/login', (req, res) => {

// })

module.exports = router;