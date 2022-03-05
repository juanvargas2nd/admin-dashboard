

exports.getInitial = async (req, res) => {
    try {
        console.log(req.body)   
    
        res.status(200).json({
            message: 'Get Initial'
        })
    } catch (err) {
        console.log("Error", err)
    }
}

exports.postInitial = async (req, res) => {
    try {
        if(!req.body.text) {
            console.log('no data found')
            res.status(400).json({
                message: 'Please add a text'
            })
        }
        console.log(req.body)
        res.status(201).json({
            message: 'Post Goals'
        })
    } catch (err) {
        console.log("Error", err)
    }
}