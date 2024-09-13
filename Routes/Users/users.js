const { Router } = require("express");
const userRouter = Router()
const userModel = require('../../db/userModel');
const { Get, Post, Delete, Put } = require("../../service/service");

userRouter.get('/', (_, res) => {
  res.send("Hello from Users route")
});

userRouter.get('/users', (req, res) => {
  Get(req, res, userModel)
})

userRouter.post('/users', (req, res) => {
  Post(req, res, userModel)
})

userRouter.delete('/users/:id', (req, res) => {
  Delete(req, res, userModel)
})

userRouter.put('/users/:id', (req, res) => {
  Put(req, res, userModel)
})
module.exports = userRouter