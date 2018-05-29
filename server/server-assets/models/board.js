var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schemaName = 'board'
var ObjectId = 

let comment = new Schema({
    body: {type: String, required: true},
    author: {type: String, required: true}
})

let task = new Schema({
    body: {type: String, required: true},
    author: {type: String, required: true},
    comments: [comment]
})

let list = new Schema({
    title: {type: String, required: true},
    author: { type: String, required: true },
    tasks: [tasks],

})
let board = new Schema({
    title: { type: String, required: true },
    list: [list],
    author: { type: String, required: true }
})

module.exports = mongoose.model(schemaName, board)
