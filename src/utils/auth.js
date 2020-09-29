// import { verifyToken } from './config'
import jwt from 'jsonwebtoken'

export default async function isAuthorized(req, res, next) {
  const token = req.body.token || req.headers['x-access-token']

  if (!token) return res.status(401).send({ error: 'Not authorized' })

  await jwt.verify(token, process.env.GLOBAL_SALT_KEY, function (error) {
    if (error) return res.status(401).send({ error: 'Invalid token' })
  })
  return next()
}
