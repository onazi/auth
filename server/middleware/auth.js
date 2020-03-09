const {User} = require('../models/user');

const auth = (req, res, next) => {

    let token = req.cookies.auth

    User.findByToken(token, (err, user) => {
        if(err) throw err;
        if(!user) return res.status(401).send('no acess');

        

        req.token = token;
        next();
    })
}

module.exports = {auth}