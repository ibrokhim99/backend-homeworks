const { HttpError } = require('../../shared/errors')
const {
  decreaseProductStock,
  getProduct,
  increaseProductStock,
} = require('./products.repository')

let buyQueue = Promise.resolve()

function getProductService() {
  return getProduct()
}

async function buyProductService(input) {
  const quantity = Number(input.quantity)

  if (!quantity || quantity <= 0) {
    throw new HttpError(400, 'Quantity must be greater than 0')
  }

  const product = getProduct()

  if (product.stock < quantity) {
    throw new HttpError(400, 'Not enough stock', {
      product,
    })
  }

  const updatedProduct = await decreaseProductStock(quantity)

  return updatedProduct
}

function buyProductSafelyService(input) {
  const buyTask = buyQueue.then(() => buyProductService(input))

  buyQueue = buyTask.catch(() => {})

  return buyTask
}

async function restockProductService(input) {
  const quantity = Number(input.quantity)

  if (!quantity || quantity <= 0) {
    throw new HttpError(400, 'Quantity must be greater than 0')
  }

  return increaseProductStock(quantity)
}

module.exports = {
  getProductService,
  buyProductSafelyService,
  restockProductService,
}
