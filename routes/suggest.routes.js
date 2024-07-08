const SuggestedController = require("../controller/suggest.controller")

const router = require("express").Router()

router
    .get("/suggest-products", SuggestedController.getAllSuggestProducts)
    .post("/add-suggest-products", SuggestedController.AddSuggestProdcut)
    .put("/update-suggest-products/:id", SuggestedController.updateSuggestProduct)
    .delete("/delete-suggest-products/:id", SuggestedController.deleteSuggestProduct)

module.exports = router