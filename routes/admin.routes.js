const produtConteoller = require("../controller/admin.controller")

const router = require("express").Router()


router
    .get("/get-feature-product", produtConteoller.getAllFeProducts)
    .post("/add-feature-product", produtConteoller.AddProdcut)
    .put("/update-feature-product/:id", produtConteoller.updateProduct)
    .delete("/delete-feature-product/:id", produtConteoller.deleteProduct)

module.exports = router