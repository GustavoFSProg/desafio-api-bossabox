import dotenv from 'dotenv'
import md5 from 'md5'
import usersModel from '../models/usersModel'
import { generateToken } from '../utils/config'

dotenv.config()

async function create(req, res) {
  try {
    await usersModel.create({
      name: req.body.name,
      email: req.body.email,
      password: md5(req.body.password, process.env.GLOBAL_SALT_KEY),
    })

    const token = await generateToken({
      email: req.body.email,
      password: md5(req.body.password, process.env.GLOBAL_SALT_KEY),
    })

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

async function deleteAll(req, res) {
  try {
    await usersModel.deleteMany()

    return res.status(200).send({ menssage: 'Tudo Apagado!' })
  } catch (error) {
    return res.status(200).send({ menssage: 'Tudo cagado!' })
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body

    const data = await usersModel.findOne({
      email,
      password: md5(password, process.env.GLOBAL_SALT_KEY),
    })

    if (!data) return res.status(400).send({ msg: 'Usuario não encontrado!' })

    const token = await generateToken(data)

    return res.status(200).send({ data, token })
  } catch (error) {
    return error
  }
}

// async function login(req, res) {
//   try {
//     const data = await usersModel.findOne({
//       email: req.body.email,
//       password: md5(req.body.password, process.env.GLOBAL_SALT_KEY),
//     })

//     const token = await generateToken(req.body.email, req.body.password)

//     return res.status(200).send({ data, token })
//   } catch (error) {
//     return res.status(400).send({ error })
//   }
// }

export default { create, getAll, login, deleteAll }
