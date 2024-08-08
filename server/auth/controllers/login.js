import jwt from 'jsonwebtoken'
import { DB_PATH, EXPIRES_IN, SECRET_KEY } from '../../config.js'
import { readFileSync } from 'fs'

const loginController = (req, res) => {
  const { login, password } = req.body
  if (!isAuthenticated({ login, password })) {
    const status = 404
    const message = 'Incorrect login or password'
    res.status(status).json({ status, message })
    return
  }
  const access = createToken({ login, password })
  res.status(200).json({ access })
}

function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: EXPIRES_IN })
}
const isAuthenticated = ({ login, password }) => {
  const db = JSON.parse(readFileSync(DB_PATH, 'UTF-8'))
  return db.users.findIndex((user) => user.login === login && user.password === password) !== -1
}

export default loginController
