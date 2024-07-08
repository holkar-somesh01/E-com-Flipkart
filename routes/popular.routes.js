const popularConteoller = require("../controller/popular.controller")
const router = require("express").Router()


router
    .get("/popular-product", popularConteoller.getAllPopularProducts)
    .post("/add-Popular-product", popularConteoller.AddPopularProdcut)
    .put("/update-Popular-product/:id", popularConteoller.updatePopularProduct)
    .delete("/delete-Popular-product/:id", popularConteoller.deletePopularProduct)

module.exports = router