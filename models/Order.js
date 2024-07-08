const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        required: true
    },
    products: {
        type: [mongoose.Types.ObjectId],
        ref: "product",
        required: true
    },
    status: {
        type: String,
        enum: ["placed", "delivered", "cancel"],
        default: "placed"
    },
})

module.exports = mongoose.model("order", orderSchema)