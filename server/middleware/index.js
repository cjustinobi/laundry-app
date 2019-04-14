const multer = require('multer')

const fileFilter = function (req, file, cb) {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']
    if (!allowedTypes.includes(file.mimetype)) {
        const error = new Error('wrong file type')
        error.code = 'LIMIT_FILE_TYPES'
        return cb(error, false)
    }
    cb(null, true)
}


module.exports = {
    isAdmin(req, res, next) {
        if (req.headers.user_type == 3) {
            next()
        } else {
            res.status(500).send('not permitted to do this')
        }
    },

    upload: multer({
        dest: './assets/uploads/products/',
        fileFilter
    })
}
