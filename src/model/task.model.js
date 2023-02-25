const mongoose = require('mongoose')

const tasksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true
  }
})

const taskModel = mongoose.model("Task", tasksSchema)

module.exports = taskModel