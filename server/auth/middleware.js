import { verifyToken } from './utils.js'

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader || authHeader.split(' ')[0] !== 'Bearer') {
    const status = 401
    const message = 'Error in authorization format'
    res.status(status).json({ status, message })
    return
  }
  try {
    const token = authHeader.split(' ')[1]
    const verifyTokenResult = verifyToken(token)

    if (verifyTokenResult instanceof Error) {
      const status = 401
      const message = 'Access token not provided'
      res.status(status).json({ status, message })
      return
    }
    next()
  } catch (err) {
    const status = 401
    const message = 'Token is not valid'
    res.status(status).json({ status, message })
  }
}

export default authMiddleware
