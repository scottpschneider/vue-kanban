var mongoose = require('mongoose')
var connectionString = 'mongodb://student:student@ds056698.mlab.com:56698/kanbanvue'
var connection = mongoose.connection

mongoose.connect(connectionString)

connection.on('error', err=>{
    console.log('error from database:', err)
})

connection.once('open',()=>{
    console.log('Connected to Database')
})