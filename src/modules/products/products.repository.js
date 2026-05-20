const { db, fakeDatabaseDelay } = require('../../shared/db')

function getProduct() {
  return {
    name: db.product.name,
    stock: db.product.stock,
  }
}

async function decreaseProductStock(quantity) {
  await fakeDatabaseDelay()

  db.product.stock -= quantity

  return getProduct()
}

async function increaseProductStock(quantity) {
  await fakeDatabaseDelay()

  db.product.stock += quantity

  return getProduct()
}

module.exports = {
  getProduct,
  decreaseProductStock,
  increaseProductStock,
}
