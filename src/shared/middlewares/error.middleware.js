function errorMiddleware(error, req, res, next) {
  const statusCode = error.statusCode || 500

  if (error.responseBody) {
    return res.status(statusCode).json(error.responseBody)
  }

  const response = {
    message: error.message || 'Internal server error',
  }

  if (error.details) {
    Object.assign(response, error.details)
  }

  return res.status(statusCode).json(response)
}

module.exports = {
  errorMiddleware,
}
