const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = (userData) => User.create(userData);

exports.login =async ({email, password}) => {
    const user = await User.findOne({email});

    if(!user) {
        throw new Error('Invalid username or password');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if(!isValid) {
        throw new Error('Invalid username or password');
    }
    const payload = {
        _id: user._id,
        email: user.email,
    }
    const token = jwt.sign(payload, 'SECRETSECRET', { expiresIn: '2d' });
};