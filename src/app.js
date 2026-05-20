const express = require('express')
const userRoutes = require('./modules/users/users.routes')
const productRoutes = require('./modules/products/products.routes')
const { errorMiddleware } = require('./shared/middlewares/error.middleware')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/health', (req, res) => {
  console.log('/GET /health')
  res.send({ status: 'ok' })
})

app.get('/slow', async (req, res) => {
  console.log('/GET /slow')
  await new Promise((resolve) => setTimeout(resolve, 2000))
  res.send({ message: 'Finished after 2 seconds' })
})

app.use(userRoutes)
app.use(productRoutes)
app.use(errorMiddleware)

module.exports = app
