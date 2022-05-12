const express = require('express')
const cors = require('cors')
const User = require('./users-model')
const router = express.Router()
router.use(cors())


router.get('/users', (req, res) => {
    User.findAll()
        .then(users => {
            res.json(users)
        })
        .catch(err=> {
            res.status(500).json({message: 'Error trying to retrieve users' || err.message})
        })
})
router.post('/register', (req, res) => {
    let {username, password} = req.body
    if(username && password) {
        User.create({username: username, password: password})
            .then(user =>{
                res.json(user)
            })
            .catch(err => {
                res.status(500).json({message: 'Error trying to create a new user' || err.message})
            })
    } else {
        res.json({message: 'ITS BROKEN'})
    }
})
router.post('/login', (req, res) => {
    let {username, password} = req.body
    if(username && password) {
        User.findUser({username: username, password: password})
            .then(user => {
                res.json(user)
            })
            .catch(err => {
                res.status(500).json({message: 'Error trying to retrieve the user' || err.message})
            })
    } else {
        res.json({message: 'ITS BROKEN'})
    }
})

module.exports = router