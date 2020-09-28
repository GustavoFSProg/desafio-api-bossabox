import dotenv from 'dotenv'
import md5 from 'md5'
import usersModel from '../models/usersModel'
import generateToken from '../utils/auth'

dotenv.config()

async function create(req, res) {
  try {
    await usersModel.create({
      name: req.body.name,
      email: req.body.email,
      password: md5(req.body.password, process.env.GLOBAL_SALT_KEY),
    })
    const token = await generateToken(req.body.email, req.body.password)

    return res.status(201).send({ msg: 'User created successfuly', token })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function getAll(req, res) {
  try {
    const data = await usersModel.find()

    return res.status(200).send({ data })
  } catch (error) {
    return res.status(400).send({ msg: 'Users not Found' })
  }
}

export default { create, getAll }
