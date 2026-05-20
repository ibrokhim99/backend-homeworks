const app = require('./app')

const port = 3000
const host = '127.0.0.1'

const server = app.listen(port, host, () => {
  console.log(`app listening on http://${host}:${port}`)
})

server.on('error', (error) => {
  console.error(`Failed to start server on http://${host}:${port}`)
  console.error(error)
  process.exit(1)
})
