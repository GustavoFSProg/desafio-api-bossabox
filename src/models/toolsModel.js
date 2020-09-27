import { model, Schema } from 'mongoose'

const schema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  link: String,
  description: String,
  tags: [
    {
      type: String,
    },
  ],
})

export default model('toolsModel', schema)
