import jsonServer from 'json-server'
import bodyParser from 'body-parser'
import authMiddleware from './auth/middleware.js'
import { DB_PATH } from './config.js'
import loginController from './auth/controllers/login.js'
import userInfoController from './auth/controllers/user-info.js'

const server = jsonServer.create()
const router = jsonServer.router(DB_PATH)
const middlewares = jsonServer.defaults()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(middlewares)

server.post('/login', loginController)
server.get('/user/info', userInfoController)
server.use(/^(?!\/login).*$/, authMiddleware)

server.use(router)

server.listen(3001, () => {
  console.log('JSON Server is running on http://localhost:3001')
})
