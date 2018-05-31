var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schemaName = 'task'

let task = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    userId: {type: String, required: true},
    parentId: {type: String, required: true}
})

module.exports = mongoose.model(schemaName, task)