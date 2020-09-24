import toolsModel from '../models/toolsModel'

async function getAll(req, res) {
  try {
    const data = await toolsModel.find()

    return res.status(200).send({ data })
  } catch (error) {
    return res.status(200).send({ error })
  }
}

async function create(req, res) {
  try {
    await toolsModel.create({
      title: req.body.title,
      link: req.body.link,
      description: req.body.description,
      tags: req.body.tags,
    })

    return res.status(201).send({ msg: 'Created' })
  } catch (error) {
    return res.status(400).send({ msgError: error })
  }
}

export default { create, getAll }
