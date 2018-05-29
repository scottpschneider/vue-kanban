var router = require('express').Router()
    var Lists = require('../models/list')

   //get board by id or get all lists
    router.get('/api/lists/:id?', (req, res)=>{
        if(req.params.id){
            Lists.findById(req.params.id)
                .then(list=>{
                    return res.status(200).send(board)
                })
                .catch(err=>{
                    res.status(400).send(err)
                })
        }
        Lists.find(req.query)
        .then(lists=>{
            res.status(200).send(lists)
        })
        .catch(err=>{
            res.status(400).send(err)
        })
    })

    //to create a board
    router.post('/api/lists', (req, res)=>{
        Lists.create(req.body)
        .then(newList=>{
            res.status(200).send(newList)
        })
        .catch(err=>{
            res.status(400).send(err)
        })
    })

    //going to have an edit board
    router.put('/api/lists/:id', (req,res)=>{
        Lists.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(list=>{
            res.status(200).send({message:'successfully updated'}, list)
        })
        .catch(err=>{
            res.status(400).send(err)
        })
    })

    //a destroy lisg

router.delete('/api/lists/:id', (req,res)=>{
    Lists.findByIdAndRemove(req.params.id)
    .then(list=>{
        res.status(200).send({message: 'successfuly destroyed'}, list)
    })
})
    module.exports = {router}
