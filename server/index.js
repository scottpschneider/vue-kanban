var express = require('express')
var bp = require('body-parser')
var app = express()
var cors = require('cors')
var port = 4000

app.use(cors())

require('./server-assets/db/mlab-config')

//register middlewear
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

//routes
var boards = require('./server-assets/routes/boards')
app.use(boards.router)

var comments = require('./server-assets/routes/comments')
app.use(comments.router)

var lists = require('./server-assets/routes/lists')
app.use(lists.router)

var tasks = require('./server-assets/routes/tasks')
app.use(tasks.router)


app.get('*', (req, res, next) => {
    res.status(400).send({
        error: 'No matching routes'
    })
})
app.listen(port, () => {
    console.log('server listening on port', port)
})
