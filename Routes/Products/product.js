const { Router } = require("express");
const productRouter = Router()
const productModel = require('../../db/productModel');
const { Get, Post, Delete, Put } = require("../../service/service");

productRouter.get('/', (_, res) => {
  res.send("Hello from Product route")
});

productRouter.get('/product', (_, res) => {
  Get(_, res, productModel)
})

productRouter.post('/product', (req, res) => {
  Post(req, res, productModel)
})

productRouter.delete('/users/:id', (req, res) => {
  Delete(req, res, productModel)
})

productRouter.put('/users/:id', (req, res) => {
  Put(req, res, productModel)
})
module.exports = productRouter