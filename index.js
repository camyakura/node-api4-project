require('dotenv').config()

const server = require('./api/server')

const PORT = process.env.PORT || 9000

if(PORT == null) {
    console.error('no port set')
}

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
    console.log(`environment is ${process.env.NODE_ENV}`)
})