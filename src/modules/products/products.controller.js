const {
  buyProductSafelyService,
  getProductService,
  restockProductService,
} = require('./products.service')

function getProductController(req, res) {
  console.log('/GET /product')

  res.json({
    product: getProductService(),
  })
}

async function buyProductController(req, res) {
  console.log('/POST /buy')

  const product = await buyProductSafelyService(req.body || {})

  res.json({
    message: 'Buy successful',
    product,
  })
}

async function restockProductController(req, res) {
  console.log('/POST /restock')

  const product = await restockProductService(req.body || {})

  res.json({
    message: 'Restock successful',
    product,
  })
}

module.exports = {
  getProductController,
  buyProductController,
  restockProductController,
}
