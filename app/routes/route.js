const express = require('express')
const router = express.Router()

const initialController = require('../controllers/initialController')



router.get('/get', initialController.getInitial)
router.post('/post', initialController.postInitial)

router.delete('/:id', (req,res) => {
    res.status(200).json({
        message: `Delete Goal ${req.params.id}`
    })
})

router.patch('/:id', (req,res) => {
    res.status(200).json({
        message: `Patch Goal ${req.params.id}`
    })
})


module.exports = router