import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import routeList from './routes/toolsRoute'

dotenv.config()

// mongoose.connect(process.env.DATABASE_CONNECTION, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// })

mongoose.connect(process.env.DATABASE_CONNECTION_TEST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})

const { PORT } = process.env

const app = express()

app.use(express.json())
app.use(cors())
app.use('/', routeList)

app.listen(PORT, console.log(`Api Running on PORT:${PORT}`))

export default app