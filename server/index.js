import jsonServer from 'json-server'
import bodyParser from 'body-parser'
import loginController from './auth/controller.js'
import authMiddleware from './auth/middleware.js'
import { DB_PATH } from './config.js'

const server = jsonServer.create()
const router = jsonServer.router(DB_PATH)
const middlewares = jsonServer.defaults()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(middlewares)
server.use(router)

server.post('/login', loginController)
server.use(/^(?!\/login).*$/, authMiddleware)

server.listen(3001, () => {
  console.log('JSON Server is running on http://localhost:3001')
})
