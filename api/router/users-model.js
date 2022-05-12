let id = 0

function getId() {
    return ++id
}

let users = [
    {id: getId(), username: 'Sam', password: 'Wazzup'},
    {id: getId(), username: 'Nino', password: 'Hello'},
]

module.exports = {
    async findAll() {
        return users
    },
    async findUser({username, password}) {
        const user = users.find(user => {
            user.username === username && user.password === password
        })
        return user
    },
    async create({username, password}) {
        const newUser = {id: getId(), username, password}
        users.push(newUser)
        return newUser
    }
}