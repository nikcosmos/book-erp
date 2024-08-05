import jsonServer from 'json-server'
import jwt from 'jsonwebtoken'
import bodyParser from 'body-parser'
import { readFileSync } from 'fs'
import { resolve, join } from 'path'

const server = jsonServer.create()
const dbPath = join(resolve(), '/server/db.json')
const router = jsonServer.router(dbPath)
const middlewares = jsonServer.defaults()

const SECRET_KEY = 'your_secret_key'
const expiresIn = '1h'

const createToken = (payload) => jwt.sign(payload, SECRET_KEY, { expiresIn })

const verifyToken = (token) =>
  jwt.verify(token, SECRET_KEY, (err, decode) => (decode !== undefined ? decode : err))

const isAuthenticated = ({ username, password }) => {
  const db = JSON.parse(readFileSync(dbPath, 'UTF-8'))
  return (
    db.users.findIndex((user) => user.username === username && user.password === password) !== -1
  )
}

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(middlewares)

server.post('/login', (req, res) => {
  const { username, password } = req.body
  if (!isAuthenticated({ username, password })) {
    const status = 401
    const message = 'Incorrect username or password'
    res.status(status).json({ status, message })
    return
  }
  const accessToken = createToken({ username })
  res.status(200).json({ accessToken })
})

server.use(/^(?!\/login).*$/, (req, res, next) => {
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
})

server.use(router)

server.listen(3001, () => {
  console.log('JSON Server is running on http://localhost:3001')
})
