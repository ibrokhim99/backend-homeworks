const db = {
  users: [
    { id: 1, name: 'eshamt', role: 'backend' },
    { id: 2, name: 'toshmat', role: 'frontend' },
  ],
  product: {
    name: 'Laptop',
    stock: 5,
  },
}

function fakeDatabaseDelay() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
}

module.exports = {
  db,
  fakeDatabaseDelay,
}
