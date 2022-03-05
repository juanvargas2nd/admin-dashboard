const express = require('express')
const router = express.Router()

const initialRoute = require('../routes/route')

// Initial Router

router.use('/initial', initialRoute)

module.exports = router;