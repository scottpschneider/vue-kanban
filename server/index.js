var express = require('express')
var bp = require ('body-parser')
var app = express()
var cors = require('cors')
var port = 4000

app.use(cors())

require('./server-assets/db/mlab-config')

//register middlewear
app.use(bp.json())
app.use(bp.urlencoded({extended: true}))

//routes
var boards = require('./server-assets/routes/boards')
app.use(boards.router)

app.listen(port, ()=>{
    console.log('server listening on port', port)
})