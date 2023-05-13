const Joi = require('joi');

const id = Joi.string();
const firstName = Joi.string();
const lastName = Joi.string();
const email = Joi.string().min(5);
const password = Joi.string().min(4);
const birthday = Joi.date();
const status = Joi.boolean().default(true);
const role = Joi.string();

const createUserValidation = Joi.object({
    
    firstName: firstName.required(),
    lastName: lastName,
    email: email.required(),
    password: password.required(),
    birthday: birthday,
    status: status,
    role: role,
})

const getUser = Joi.object({

})

const updateUserValidation = Joi.object({
   id : id.required(),
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    birthday: birthday,
    status: status,
    role: role,
})

const deleteUserValidation = Joi.object({
    id : id.required
})

module.exports = { createUserValidation, updateUserValidation, deleteUserValidation }