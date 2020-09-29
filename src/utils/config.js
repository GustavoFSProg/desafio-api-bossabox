import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export async function decodeToken(token) {
  return jwt.decode(token, process.env.GLOBAL_SAL_KEY)
}

export async function generateToken(data) {
  const token = jwt.sign({ data }, process.env.GLOBAL_SALT_KEY, {
    expiresIn: '1d',
  })

  return token
}
