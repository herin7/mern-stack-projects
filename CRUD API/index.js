const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const router = require('./routes/product.route.js');
const app = express()

app.use(express.json()); 
app.use(express.urlencoded({extended : false})); 

//routes
app.use("/api/products",router)








app.get('/' ,(req,res) => {
    res.send("Hcaello from Node AsdPI!");
});






mongoose.connect("mongodb+srv://herintrails:oqscvYIvTpLxj3td@cluster0.vofn0.mongodb.net/node-api?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("Connected to database");
    app.listen(3000,() => {
        console.log("Server isf running");
    });
    
})
.catch(() => {
    console.log("Connected failure")
})