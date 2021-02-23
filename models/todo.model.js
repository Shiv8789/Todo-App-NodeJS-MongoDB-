const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    todo: {
        type: String,
        required:true
    },
    postedAt: {
        type: Date,
        default:Date.now
    }
})

const Todo = mongoose.model('Todo', userSchema);

module.exports = Todo;