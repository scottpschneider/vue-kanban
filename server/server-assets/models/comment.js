var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schemaName = 'comment'

let comment = new Schema({
    body: {type: String, required: true},
    author: {type: String, required: true},
    userId: {type: String, required: true},
    parentId: {type: String, required: true}
})

module.exports = mongoose.model(schemaName, comment)