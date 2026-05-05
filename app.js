
const express = require('express')
const app = express()
const port = 3000
const host = 'localhost'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const users = [
  { id: 1, name: 'eshamt', role: 'backend' },
  { id: 2, name: 'toshmat', role: 'frontend' },
]

app.get('/health', (req, res) => {
  console.log("/GET /health")
  res.send({ status: 'ok' })
})

app.get('/user', (req, res) => {
  console.log("/GET /user")
  const { role } = req.query
  const filteredUsers = role
    ? users.filter((user) => user.role === role)
    : users

  res.send(filteredUsers)
})

app.get('/slow', async (req, res) => {
  console.log("/GET /slow")
  await new Promise((resolve) => setTimeout(resolve, 2000))
  res.send({ message: 'Finished after 2 seconds' })
})

app.post('/user', (req, res) => {
  console.log("/POST /user")
  const user = req.body || {}
  if (!user.name || !user.role) {
    res.status(400).send({ error: 'name and role are required' })
    return
  } else if (user?.name && user?.role) {
    users.push({
      id: users.length + 1,
      name: user.name,
      role: user.role,
    })

  }

  res.send(users)
})


const server = app.listen(port, host, () => {
  console.log(`app listening on http://${host}:${port}`)
})

server.on('error', (error) => {
  console.error(`Failed to start server on http://${host}:${port}`)
  console.error(error)
  process.exit(1)
})
