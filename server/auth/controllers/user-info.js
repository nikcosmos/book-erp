import jwt from 'jsonwebtoken'
import { DB_PATH, SECRET_KEY } from '../../config.js'
import { readFileSync } from 'fs'

const userInfoController = (req, res) => {
  const authHeader = req.headers.authorization
  const token = authHeader.split(' ')[1]

  const decodeData = jwt.decode(token, SECRET_KEY)
  const userInfo = getInfoByUser(decodeData)

  res.status(200).json(userInfo)
}

function getInfoByUser({ login, password }) {
  const db = JSON.parse(readFileSync(DB_PATH, 'UTF-8'))
  return db.users.find((user) => user.login === login && user.password === password)
}

export default userInfoController
