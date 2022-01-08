const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
  jobTitle: String,
  company: String,
  shortDesc: String,
  description: String,
  requirements: String,
  deadline: String,
  date: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Job', jobSchema)
