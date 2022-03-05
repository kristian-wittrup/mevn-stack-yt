const mongoose = require('mongoose')
const TodosSchema = new mongoose.Schema({
  todo: String,
  author: String
})

module.exports = mongoose.model('todo', TodosSchema)