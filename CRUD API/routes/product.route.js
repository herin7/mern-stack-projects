const express = require("express");
const Product = require("../models/product.model");
const { getProducts, getoneProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/product.controller");
const router = express.Router();

router.get('/',getProducts)
router.get('/:id',getoneProduct)
router.post("/",createProduct)
router.put("/:id",updateProduct)
router.delete("/:id",deleteProduct)


module.exports = router;