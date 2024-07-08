const multer = require("multer")
const { v4: uuid } = require("uuid")
const fs = require("fs")
const path = require("path")

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        // const fn = Date.now + path.extname(file.originalname)
        const fn = uuid() + path.extname(file.originalname)
        cb(null, fn)
    },
    destination: (req, file, cb) => {
        const dest = "uploads"
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest)
        }
        cb(null, dest)
    }
})

module.exports = multer({ storage }).single("image")