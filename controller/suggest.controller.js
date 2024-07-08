const asyncHandler = require("express-async-handler")
const Product = require("../models/Product")
const fs = require("fs")
const path = require("path")
const Upload = require("../utils/Upload")
const Suggest = require("../models/Suggest")

exports.getAllSuggestProducts = asyncHandler(async (req, res) => {
    const result = await Suggest.find()
    res.json({ message: "Suggest Fetch Success", result })
})
exports.AddSuggestProdcut = asyncHandler(async (req, res) => {
    Upload(req, res, async (err) => {
        if (err) {
            console.log(err)
            return res.status(400).json({ message: "Multer Error" })
        }
        if (req.file) {
            await Suggest.create({ ...req.body, image: req.file.filename })
            res.json({ message: "Suggested Add Success" })
        } else {
            return res.status(400).json({ message: "Thumb Image Is Requerd", err })
        }
    })
})
exports.updateSuggestProduct = asyncHandler(async (req, res) => {
    await Suggest.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "Products Update Success" })
})

exports.deleteSuggestProduct = asyncHandler(async (req, res) => {
    try {
        // const result = await Suggest.findById(req.params.id)
        // if (!result) {
        // return res.status(400).json({ message: "Suggest-Product not found" })
        // }
        // const imagePath = path.join(__dirname, "..", "uploads", { image: result.image })
        // await fs.unlink(imagePath)
        await Suggest.findByIdAndDelete(req.params.id)
        res.json({ message: "Suggest Delete Success" })
    } catch (error) {
        res.status(500).json({ message: "Error deleting Suggest product", error })
    }
})