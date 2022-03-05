const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000


const apiRouting = require('./routes/apiRouting')
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', apiRouting)

app.listen(port, () => console.log(`server running on port ${port}`))
