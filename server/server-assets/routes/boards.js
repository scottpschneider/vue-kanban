var router = require('express').Router()
    var Boards = require('../models/board')

   //get board by id or get all boards
    router.get('/api/boards/:id?', (req, res)=>{
        if(req.params.id){
            Boards.findById(req.params.id)
                .then(board=>{
                    return res.status(200).send(board)
                })
                .catch(err=>{
                    res.status(400).send(err)
                })
        }
        Boards.find(req.query)
        .then(boards=>{
            res.status(200).send(boards)
        })
        .catch(err=>{
            res.status(400).send(err)
        })
    })

    //to create a board
    router.post('/api/boards', (req, res)=>{
        Boards.create(req.body)
        .then(newBoard=>{
            res.status(200).send(newBoard)
        })
        .catch(err=>{
            res.status(400).send(err)
        })
    })

    //going to have an edit board
    router.put('/api/boards/:id', (req,res)=>{
        boards.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(board=>{
            res.status(200).send({message:'successfully updated'}, board)
        })
        .catch(err=>{
            res.status(400).send(err)
        })
    })

    //a destroy board

router.delete('/api/boards/:id', (req,res)=>{
    Boards.findByIdAndRemove(req.params.id)
    .then(board=>{
        res.status(200).send({message: 'successfuly destroyed'}, board)
    })
})

    module.exports = {router}
