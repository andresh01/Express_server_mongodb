const Joi = require("joi");

const id = Joi.string().min(1);
const name = Joi.string().min(2).max(20);
const description = Joi.string().min(3);
const price = Joi.number().integer().min(10);
const availableUnits = Joi.number().integer().positive().min(0);
const category = Joi.string().min(3).max(15);


const createProductValidation = Joi.object({
    
    name : name.required(),
    description : description.required(),
    price : price.required(),
    availableUnits : availableUnits.required(),
    category : category.required(),
})

const updateProductValidation = Joi.object({
    id: id.required(),
    name : name,
    description : description,
    price : price,
    availableUnits : availableUnits,
    category : category,
})

const getProductValidation = Joi.object({
    id : id.required(),
})

const deleteProductValidation = Joi.object({
    id : id.required()
})

module.exports = { createProductValidation, updateProductValidation, getProductValidation, deleteProductValidation } 