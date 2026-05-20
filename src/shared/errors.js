class HttpError extends Error {
  constructor(statusCode, message, details, responseBody) {
    super(message)
    this.statusCode = statusCode
    this.details = details
    this.responseBody = responseBody
  }
}

module.exports = {
  HttpError,
}
