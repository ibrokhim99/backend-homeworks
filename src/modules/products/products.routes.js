const { Router } = require('express')
const {
  buyProductController,
  getProductController,
  restockProductController,
} = require('./products.controller')

const router = Router()

router.get('/product', getProductController)
router.post('/buy', buyProductController)
router.post('/restock', restockProductController)

module.exports = router
