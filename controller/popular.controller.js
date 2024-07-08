const asyncHandler = require("express-async-handler")
const Product = require("../models/Product")
const fs = require("fs")
const path = require("path")
const Upload = require("../utils/Upload")
const Popular = require("../models/Popular")

exports.getAllPopularProducts = asyncHandler(async (req, res) => {
    const result = await Popular.find()
    res.json({ message: "Popular Fetch Success", result })
})
exports.AddPopularProdcut = asyncHandler(async (req, res) => {
    Upload(req, res, async (err) => {
        if (err) {
            console.log(err)
            return res.status(400).json({ message: "Multer Error" })
        }
        if (req.file) {
            await Popular.create({ ...req.body, image: req.file.filename })
            res.json({ message: "Popular Add Success" })
        } else {
            return res.status(400).json({ message: "Thumb Image Is Requerd", err })
        }
    })
})
exports.updatePopularProduct = asyncHandler(async (req, res) => {
    await Popular.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "Products Update Success" })
})

exports.deletePopularProduct = asyncHandler(async (req, res) => {
    try {
        // const result = await Popular.findById(req.params.id)
        // if (!result) {
        // return res.status(400).json({ message: "Popular-Product not found" })
        // }
        // const imagePath = path.join(__dirname, "..", "uploads", { image: result.image })
        // await fs.unlink(imagePath)
        await Popular.findByIdAndDelete(req.params.id)
        res.json({ message: "Popular Delete Success" })
    } catch (error) {
        res.status(500).json({ message: "Error deleting popular product", error })
    }
})