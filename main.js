const express = require('express')
const app = express()
const dbConnect = require('./db/mongoDB')
const productRouter = require('./Routes/Products/product')
const userRouter = require('./Routes/Users/users')
const accessMiddleWare = require('./middleware/accessMiddleware')
dbConnect()

app.use(express.json())
app.get('/', (_, res) => {
  res.send("Hello")
})
app.use('/products', productRouter)
app.use('/users', accessMiddleWare, userRouter)

app.listen(3000, () => {
  console.log("Server running on port: http://localhost:3000")
})
