import { Schema, model } from 'mongoose'

const schema = new Schema({
  name: {
    type: String,
  },

  email: {
    type: String,
  },
  password: {
    type: String,
  },
})

export default model('usersModel', schema)
