module.exports = (req, res, next) => {
  if (!req.headers['access']) {
    res.status(403).json({ error: true, message: "Forbidden" })
  }
  next()
}