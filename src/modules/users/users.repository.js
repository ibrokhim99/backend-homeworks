const { db } = require('../../shared/db')

function findUsersByRole(role) {
  if (!role) {
    return db.users
  }

  return db.users.filter((user) => user.role === role)
}

function createUser(data) {
  db.users.push({
    id: db.users.length + 1,
    name: data.name,
    role: data.role,
  })

  return db.users
}

module.exports = {
  findUsersByRole,
  createUser,
}
