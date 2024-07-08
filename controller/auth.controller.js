const asyncHandler = require("express-async-handler")
const JWT = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const Users = require("../models/Users")
const sendEmail = require("../utils/email")

exports.register = asyncHandler(async (req, res) => {
    const { password, email } = req.body
    const isFound = await Users.findOne({ email })
    if (isFound) {
        res.status(400).json({ messaage: "Email Already Exist" })
    }

    const hashPass = await bcrypt.hash(password, 10)
    if (!isFound) {
        await Users.create({ ...req.body, password: hashPass, role: "customer" })
        await sendEmail({ to: email, subject: "WelCome TO Flipkart Clone", message: `<h1 style={{ color: 'aqua', fontSize: '20px', fontFamily: 'initial' }}>Welcome,${req.body.name}.</h1><div style={{ color: 'gray', fonSize: '10px', fontFamily: 'sans-serif' }}>You'r Email SuccessFully Registerd</div>` })
    }
    res.json({ message: `${req.body.name}, Your  Registeration Success ` })
})
exports.login = asyncHandler(async (req, res) => {
    const { password, email } = req.body
    const result = await Users.findOne({ email })
    if (!result) {
        return res.status(400).json({ message: "Email Not Found" })
    }
    const verify = await bcrypt.compare(password, result.password)
    if (!verify) {
        return res.status(400).json({ message: "Password Do Not Match" })
    }
    const Token = JWT.sign({ userId: result._id }, process.env.JWT_KEY, { expiresIn: "10h" })
    res.cookie("auth-token", Token, { httpOnly: true })
    res.json({
        message: "Login Sucess", result: {
            _id: result._id,
            name: result.name,
            email: result.email,
            role: result.role,
        }
    })
})

exports.logout = asyncHandler(async (req, res) => {
    res.clearCookie("auth-token")
    res.json({ message: "Logout Success" })
})
exports.GetUser = asyncHandler(async (req, res) => {
    const result = await Users.find({ role: "customer" })
    res.json({ message: "user Get Success", result })
})

exports.deleteUser = asyncHandler(async (req, res) => {
    await Users.findByIdAndDelete(req.params.id)
    res.json({ message: "User Delete Success" })
})