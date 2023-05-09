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

exports.updateUser = async (req, res, next) => {
    const { id } = req.query;
    const updateInfo = req.body;

    try {
        const updateUser = await User.update(
            updateInfo, {where: {id: id}}
        )   
        res.status(200).json(await User.findOne({where: {id: id}}));
    } catch (error) {
        console.error(error.message)
        next(error);
    }
}

exports.deleteUser = async (req, res, next) => {
    const {id} = req.query;
    try {
        const infoUser = await User.findOne({where: {id:id}});
        const deleteUser = await User.destroy({
            where: {id: id}
        })
        res.status(200).json(infoUser)
    } catch (error) {
        console.error(error.message)
        next(error);
    }

}