const User = require('../models')

exports.getAllUsers = async (req, res, next) => {
    const { offset, limit } = req.query;

    try {
        const users = await User.findAll({
            offset,
            limit
        });
        
        res.json(users);
    } catch (error) {
        res.send(error.message)
        console.error(error.message)
    }
}

exports.createUser = async (req, res, next) => {
    try {
        console.log(req.body)
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        console.error(error.message)
        next(error);
    }
}