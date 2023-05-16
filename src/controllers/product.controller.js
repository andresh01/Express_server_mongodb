const { Product } = require('../models');

exports.getAllProducts = async (_, res, next) => {
    try {
        const product = await Product.find();
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
}

exports.getProductById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const product = await Product.find({ _id: id });
        if (Product.length == 0) {
            res.status(404).json({
                status: 404,
                message: "product not found",
            })
        } else {
            res.status(200).json({
                status: 200,
                message: "product found",
                product: product
            });
        }
    } catch (error) {
        next(error);
    }
}

exports.addNewProduct = async (req, res, next) => {
    const product = req.body;

    try {
        const resp = await Product.create(product);
        res.status(200).json({
            status: 200,
            message: "product was created",
            product: resp
        });
    } catch (error) {
        next(error);
    }
}

exports.updateProduct = async (req, res, next) => {
    const { id } = req.params;
    const updateProduct = req.body;
    try {
        const product = await Product.findOneAndUpdate({ _id: id }, { $set: { ...updateProduct } });
        if (product == null) {
            res.status(404).json({
                status: 404,
                message: "product not found",
            })
        } else {
            res.status(200).json({
                status: 200,
                message: "Product was updated",
                product: product,
                update: updateProduct
            })
        }
    } catch (error) {
        next(error);
    }
}

exports.deleteProduct = async (req, res, next) => {
    const { id } = req.params;
    try {
        const product = await Product.findOneAndDelete({ _id: id });
        if (product == null) {
            res.status(404).json({
                status: 404,
                message: "product not found",
            })
        } else {
            res.status(200).json({
                status: 200,
                message: "product was deleted",
                product: product
            })
        }
    } catch (error) {
        next(error);
    }
}