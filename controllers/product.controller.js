const { get } = require("mongoose");
const Product = require("../models/product.model");
const express = require('express');

const app = express()

app.use(express.json()); 
app.use(express.urlencoded({extended : false})); 


const getProducts = async(req,res) => {
    try{
        const myproducts = await Product.find();
        res.status(200).json(myproducts);
       }
       catch(error){
        res.status(500).json({message : error.message});
       }
}

const getoneProduct  = async(req,res) => { 
    try{
        const { id } = req.params;
        const myprod = await Product.findById(id);
        res.status(200).json(myprod);
    }
    catch(er){ 
        res.status(500).json({message : er.message})
    }
}
const createProduct = async(req,res) => {
    try {
        const product =  await Product.create(req.body);
        res.status(200).json(product)
    }
    catch(error) { 
        res.status(500).json({message: error.message});
    }
}
const updateProduct = async(req,res) => { 
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product) { 
            return res.status(404).json({message : "Product not found"});
        }
        const newProd = await Product.findById(id);
        res.status(200).json(newProd);

    }
    catch(error){
        res.status(500).json({message : error.message});
    }
}

const deleteProduct = async(req,res) => {
        try{
            const { id } = req.params;
            await Product.findByIdAndDelete(id);
           
            res.status(200).json({message : "Item removed succesfully"})
        }
        catch(error) { 
            res.status(500).json({message : error.message})
        }
}


module.exports ={ 
    getProducts,
    getoneProduct,
    createProduct,
    updateProduct,
    deleteProduct
}