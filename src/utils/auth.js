import jwt from 'jsonwebtoken'

export default async function generateToken(data) {
  const token = jwt.sign({ data }, process.env.GLOBAL_SALT_KEY, {
    expiresIn: '1d',
  })

  return token
}
