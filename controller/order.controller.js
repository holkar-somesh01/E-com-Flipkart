const asyncHandler = require("express-async-handler")
const sendEmail = require("../utils/email")
const Order = require("../models/Order")
const Users = require("../models/Users")

exports.placeOrder = asyncHandler(async (req, res) => {
    await Order.create(req.body)
    res.json({ message: "Order Placed Success" })
})

exports.GetUserOrderDetails = asyncHandler(async (req, res) => {
    const { id } = req.params
    const result = await Order.find({ customer: id }).populate("products")
    res.json({ message: "Order Fetch Success", result })
})
exports.GetOrders = asyncHandler(async (req, res) => {
    const result = await Order.find()
    res.json({ message: "Order Fetch Success", result })
})


// Cancel ORDER
exports.cancelOrder = asyncHandler(async (req, res) => {
    const { id } = req.params
    await Order.findByIdAndUpdate(id, { status: "cancel" })
    const x = await Order.findById(id)
    const result = await Users.findById(x.customer)
    await sendEmail({
        to: result.email,
        subject: "Order Cancel Success",
        message: `<h1>Your Order Has Beeen Canceled.</h1>`
    })
    res.json({ message: "Order Cancel Success" })
})