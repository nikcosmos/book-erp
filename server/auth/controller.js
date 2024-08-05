import { createToken, isAuthenticated } from './utils.js'

const loginController = (req, res) => {
  const { login, password } = req.body
  if (!isAuthenticated({ login, password })) {
    const status = 401
    const message = 'Incorrect login or password'
    res.status(status).json({ status, message })
    return
  }
  const accessToken = createToken({ login })
  res.status(200).json({ accessToken })
}

export default loginController
