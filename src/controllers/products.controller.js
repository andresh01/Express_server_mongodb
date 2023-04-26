const { Products } = require('../models/products.model');
const { v4: uuidv4 } = require("uuid"); /* unique id generator */

exports.getAllProducts = async (_, res, next) => {
    try {
        console.log("Product -> getAllProducts");
        const products = await Products.find();
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
}

exports.getProductById = async (req, res, next) => {
    const { id } = req.params;
    try {
        console.log("Product -> getProductById");
        const products = await Products.find({ _id:id });
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
}

exports.addNewProduct = async (req, res, next) => {
    const product = req.body;

    try {
        console.log("Product -> AddNewProduct");
        const resp = await Products.create(product);
        res.status(200).json(resp);
    } catch (error) {
        next(error);
    }
}

exports.updateProduct = async (req, res, next) => {
    const { id } = req.params;
    const updateProduct = req.body;
    try {
        console.log("Product -> updateProduct");
        const product = await Products.findOneAndUpdate({ _id: id }, { $set: { ...updateProduct } });
        res.status(200).json(product)
    } catch (error) {
        next(error);
    }
}

exports.deleteProduct = async (req, res, next) => {
    const { id } = req.params;
    try {
        console.log("Product -> deleteProduct");
        const product = await Products.findOneAndDelete({ _id: id });
        res.status(200).json(product)
    } catch (error) {
        next(error);
    }
}