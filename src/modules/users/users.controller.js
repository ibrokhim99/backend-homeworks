const { createUserService, getUsersService } = require('./users.service')

function getUsersController(req, res) {
  console.log('/GET /user')

  const users = getUsersService({
    role: req.query.role,
  })

  res.send(users)
}

function createUserController(req, res) {
  console.log('/POST /user')

  const users = createUserService(req.body || {})

  res.send(users)
}

module.exports = {
  getUsersController,
  createUserController,
}
