const mongoose = require('mongoose')

const Schema = mongoose.Schema

const taskSchema = new Schema({
  owner: {
    type: Schema.ObjectId,
    ref: 'User',
  },
  title: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  type: {
    type: Number,
    required: true
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model('Task', taskSchema, 'tasks')
