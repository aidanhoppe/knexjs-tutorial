const Joi = require('joi');

const registerValidation = data => {
    const schema = Joi.object({
        first_name: Joi.string()
            .min(1)
            .max(30)
            .required(),
        last_name: Joi.string()
            .min(1)
            .max(30)
            .required(),
        email: Joi.string()
            .required()
            .email(),
        password: Joi.string()
            .min(8)
            .required()
    })
    console.log('in register validation: ', data)
    return schema.validate(data)
}

const loginValidation = data => {
    const schema = Joi.object({
        email: Joi.string()
            .required()
            .email(),
        password: Joi.string()
            .min(8)
            .required()
    })
    return schema.validate(data)
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;

