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



let storage = multer.diskStorage({
    fileFilter,
    destination: (req, file, cb) => {
        cb(null, 'assets/uploads/products/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

module.exports.upload = multer({storage})