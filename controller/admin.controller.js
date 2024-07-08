const asyncHandler = require("express-async-handler")
const fs = require("fs")
const path = require("path")
const Product = require("../models/Product")
const Upload = require("../utils/Upload")

exports.getAllFeProducts = asyncHandler(async (req, res) => {
    const result = await Product.find()
    res.json({ message: "Product Fetch Success", result })
})
exports.AddProdcut = asyncHandler(async (req, res) => {
    Upload(req, res, async (err) => {
        if (err) {
            console.log(err)
            return res.status(400).json({ message: "Multer Error" })
        }
        if (req.file) {
            await Product.create({ ...req.body, image: req.file.filename })
            console.log(req.file.filename)
            res.json({ message: "Product Add Success" })
        } else {
            return res.status(400).json({ message: "Thumb Image Is Requerd", err })
        }
    })
})
exports.updateProduct = asyncHandler(async (req, res) => {
    await Product.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "Products Update Success" })
})

exports.deleteProduct = asyncHandler(async (req, res) => {
    const result = await Product.findById(req.params.id)
    fs.unlinkSync(path.join(__dirname, "..", "uploads", result.image))
    await Product.findByIdAndDelete(req.params.id)
    res.json({ message: "Product Delete Success" })
})
