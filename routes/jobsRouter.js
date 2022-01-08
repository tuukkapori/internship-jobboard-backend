const express = require('express')

const router = express.Router()
const { getJobs, createJob, getSingleJob } = require('../controllers/jobs')

router.route('/').get(getJobs).post(createJob)
router.route('/:id').get(getSingleJob)

module.exports = router
