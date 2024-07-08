const router = require("express").Router()
const authController = require("./../controller/auth.controller")

router
    .get("/get", authController.GetUser)
    .post("/register", authController.register)
    .post("/login", authController.login)
    .post("/logout", authController.logout)
    .delete("/delete-user/:id", authController.deleteUser)

module.exports = router