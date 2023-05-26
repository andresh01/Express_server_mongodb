const jwt = require("jsonwebtoken");

function isAuth (req, res, next) {
    const token = req.headers.authorization;

    let decodedToken;

    try {
        decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    } catch (error) {
        console.log(error);
        res.status(401);
        res.send(error.message || 'Access forbidden');
        return
    }

    if(decodedToken){
        next();
    } else {
        res.status(400);
        res.send('Access forbbidenn');
        return
    }
}

module.exports = { isAuth }