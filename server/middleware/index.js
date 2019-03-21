
module.exports = {
    isAdmin(req, res, next) {
        if (req.headers.user_type == 3) {
            next()
        } else {
            res.status(500).send('not permitted to do this')
        }
    }
}
