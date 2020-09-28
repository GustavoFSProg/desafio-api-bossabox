import { verifyToken } from './config'

export default async function isAuthorized(req, res, next) {
  const token = req.body.token || req.headers['x-access-token']

  if (!token) return res.status(401).send({ error: 'Not authorized' })

  const { error } = await verifyToken(token)

  if (error) return res.status(401).send({ error: 'Invalid token' })
  return next()
}
