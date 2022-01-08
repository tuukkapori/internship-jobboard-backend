require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const jobsRouter = require('./routes/jobsRouter')
const connectDB = require('./db/connect')

app.use(express.json())
app.use(cors())

app.use('/api/jobs', jobsRouter)

const port = process.env.PORT || 3003

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
