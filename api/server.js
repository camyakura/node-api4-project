const express = require('express')

const server = express()
const userRouter = require('./router/usersRouter')



server.use(express.json())

server.use('/api', userRouter)

server.get('/', (req, res) => {
    res.send('<h1>HEROKU DEPLOYMENT!!!</h1>')
})

server.get('/node-env', (req, res) => {
    res.json(process.env.NODE_ENV)
})

module.exports = server