const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const key = require('../../config/keys').secret
const User = require('../../models/User')

/**
 * @route POST api/users/register
 * @desc Register the user
 * @access Public
 */
router.post('/register', (req, res) => {
    let {
        name,
        email,
        password,
        bday,
        gender,
        phone,
        mobilephone,
        address,
        confirm_password
    } = req.body
    if (password !== confirm_password) {
        return res.status(400).json({
            msg: 'Password does not match.'
        })
    }
    // Check if username unique -> remove username as primary key
    // User.findOne({
    //     username: username
    // }).then(user => {
    //     if (user) {
    //         return res.status(400).json({
    //             msg: 'Username needs to be unique.'
    //         })
    //     }
    // })
    // Check if email unique
    User.findOne({
        email: email
    }).then(user => {
        if (user) {
            return res.status(400).json({
                msg: 'Email has already been registered.'
            })
        }
    })
    // new user can be registered if passing the validation
    let newUser = new User({
        name,
        password,
        email,
        bday,
        gender,
        phone,
        mobilephone,
        address
    })
    // Hash the password and create new user
    bcrypt.genSalt(10, (err, salt)=> {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err
            newUser.password = hash
            newUser.save().then(user => {
                return res.status(201).json({
                    success: true,
                    msg: 'New User has been registered successfully.'
                })
            })
        })
    })

})

/**
 * @route POST api/users/login
 * @desc  User login
 * @access Public
 */
router.post('/login', (req, res) => {
    User.findOne({
        email: req.body.email
    }).then(user => {
        if (!user) {
            return res.status(404).json({
                msg: 'Cannot find User',
                success: false
            })
        }
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = {
                    _id: user._id,
                    name: user.name,
                    email: user.email
                }
                jwt.sign(payload, key, {
                    expiresIn: 100 //string will be seen as ms, number as second
                }, (err, token) => {
                    res.status(200).json({
                        success: true,
                        token: `bearer ${token}`,
                        user: user.name,
                        msg: 'You are logged in successfully.'
                    })
                    // res.cookie('token', token, {maxAge: 100000, httpOnly: true})
                })
            } else {
                return res.status(404).json({
                    msg: 'Incorrect password.',
                    success: false
                })
            }
        })
    })
})

/**
 * @route GET api/users/profile
 * @desc  Return User's data
 * @access Private
 */
router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json({
        user:req.user
    })
})

module.exports = router