import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const { PORT } = process.env

const app = express()

app.use(express.json())
app.use(cors())

app.listen(PORT, console.log(`Api Running on PORT:${PORT}`))

export default app
