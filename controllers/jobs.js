const Job = require('../models/Job')

const getJobs = async (req, res) => {
  let search = req.query.search
  console.log('search params: ', search)
  let findObject = {}
  if (search) {
    findObject = {
      $or: [
        { jobTitle: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } },
      ],
    }
  }
  console.log('findObject: ', findObject)

  const jobs = await Job.find(findObject)

  if (!jobs) res.status(404).send('not found')
  res.status(201).json({ jobs })
}

const createJob = async (req, res) => {
  try {
    const job = await Job.create(req.body)
    res.status(201).json({ job })
  } catch (error) {
    res.status(403)
  }
}

const getSingleJob = async (req, res) => {
  const { id } = req.params
  console.log(id)
  try {
    const job = await Job.find({ _id: id })
    res.status(200).json({ job })
  } catch (error) {
    console.log('error: ', error)
    res.status(404)
  }
}

module.exports = { getJobs, createJob, getSingleJob }
