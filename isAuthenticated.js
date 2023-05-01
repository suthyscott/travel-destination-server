module.exports = {
    isAuthenticated: (req, res, next) => {
        const {apiKey} = req.query

        if(apiKey === 'supersecureapikey'){
            next()
        }else {
            res.sendStatus(401)
        }
    }
}