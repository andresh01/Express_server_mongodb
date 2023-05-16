const User = require('../models/user.model')

exports.getAllUsers = async (req, res, next) => {
    const { offset, limit, id } = req.query;

    try {
        if (id) {
            const user = await User.findOne({ where: { id: id } })
            if(user){
                res.status(200).json({
                    status: 200,
                    message: "User found",
                    user: user
                })
            } else {
                res.status(404).json({
                    status: 404,
                    message: "User not found"
                })
            }
        } else {
            const users = await User.findAll({
                offset,
                limit,

            });
            res.status(200).json({
                status: 200,
                message: "Users found",
                user: users
            })
        }
    } catch (error) {
        next(error);
        console.error(error.message);
    }
}

/* exports.getUser = async (req, res, next) => {
    const { id } = req.query;
    
    try {
        const exist = User.findOne({where: {id: id}});
        if (exist) {
            res.status(200).json({
                status: 200,
                message: "User found",
                user: exist
            })
        } else {
            res.status(404).json({
                status: 404,
                message: "User not found"
            })
        }
    } catch (error) {
        console.error(error.message)
        next(error);
    }
} */

exports.createUser = async (req, res, next) => {
    try {
        console.log(req.body)
        const user = await User.create(req.body);
        res.status(200).json({
            status: 200,
            message: "User added",
            user: user
        })
    } catch (error) {
        console.error(error.message)
        next(error);
    }
}

exports.updateUser = async (req, res, next) => {
    const { id } = req.query;
    const { firstName, lastName, email, password, birthday, status, role } = req.body; //desestructurar para comprobar sin id
    const idBody = req.body.id;

    if (!idBody) {
        const updateInfo = { firstName, lastName, email, password, birthday, status, role };
        try {
            const exist = await User.findOne({ where: { id: id } });
            if (exist) {
                const updateUser = await User.update(
                    updateInfo, { where: { id: id } }
                )
                res.status(200).json({
                    status: 200,
                    message: "User updated",
                    user: await User.findOne({ where: { id: id } })
                })

            } else {
                res.status(404).json({
                    status: 404,
                    message: "User not found"
                })
            }
        } catch (error) {
            console.error(error.message)
            next(error);
        }
    } else {
        res.status(400).json({
            status: 400,
            message: "Id no allowed"
        })
    }
}

exports.deleteUser = async (req, res, next) => {
    const { id } = req.query;
    try {
        const infoUser = await User.findOne({ where: { id: id } });
        if (infoUser) {
            const deleteUser = await User.destroy({
                where: { id: id }
            })
            res.status(200).json({
                status: 200,
                message: "User Deleted",
                user: infoUser
            })
        } else {
            res.status(404).json({
                status: 404,
                message: "User not found"
            })
        }

    } catch (error) {
        console.error(error.message)
        next(error);
    }
}

