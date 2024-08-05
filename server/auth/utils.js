import jwt from 'jsonwebtoken'
import { DB_PATH, EXPIRES_IN, SECRET_KEY } from '../config.js'
import { readFileSync } from 'fs'

export const createToken = (payload) => jwt.sign(payload, SECRET_KEY, { expiresIn: EXPIRES_IN })

export const isAuthenticated = ({ login, password }) => {
  const db = JSON.parse(readFileSync(DB_PATH, 'UTF-8'))
  return db.users.findIndex((user) => user.login === login && user.password === password) !== -1
}

export const verifyToken = (token) =>
  jwt.verify(token, SECRET_KEY, (err, decode) => (decode !== undefined ? decode : err))
