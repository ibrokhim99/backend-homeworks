const { HttpError } = require('../../shared/errors')
const { createUser, findUsersByRole } = require('./users.repository')

function getUsersService(input) {
  return findUsersByRole(input.role)
}

function createUserService(input) {
  if (!input.name || !input.role) {
    throw new HttpError(400, 'name and role are required', null, {
      error: 'name and role are required',
    })
  }

  return createUser({
    name: input.name,
    role: input.role,
  })
}

module.exports = {
  getUsersService,
  createUserService,
}
