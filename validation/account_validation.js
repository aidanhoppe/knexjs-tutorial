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
    return Joi.validate(data, schema)
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
    return Joi.validate(data, schema)
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;

