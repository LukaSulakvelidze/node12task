const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = new Schema({
  name: String,
  price: Number,
  type: String,
})

module.exports = mongoose.model('Products', productSchema)