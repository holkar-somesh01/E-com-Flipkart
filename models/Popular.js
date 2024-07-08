const mongoose = require("mongoose")
const popularSchema = new mongoose.Schema({
    hname: { type: String, required: true },
    name: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    image: { type: String, required: true },
})

module.exports = mongoose.model("popular", popularSchema)