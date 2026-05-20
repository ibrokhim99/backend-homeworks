const { Router } = require('express')
const {
  createUserController,
  getUsersController,
} = require('./users.controller')

const router = Router()

router.get('/user', getUsersController)
router.post('/user', createUserController)

module.exports = router
