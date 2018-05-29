var router = require('express').Router()
    var Comments = require('../models/comment')

   //get comment by id or get all comments
    router.get('/api/comments/:id?', (req, res)=>{
        if(req.params.id){
            Comments.findById(req.params.id)
                .then(comment=>{
                    return res.status(200).send(comment)
                })
                .catch(err=>{
                    res.status(400).send(err)
                })
        }
        Comments.find(req.query)
        .then(comments=>{
            res.status(200).send(comments)
        })
        .catch(err=>{
            res.status(400).send(err)
        })
    })

    //to create a comment
    router.post('/api/comments', (req, res)=>{
        Comments.create(req.body)
        .then(newComment=>{
            res.status(200).send(newComment)
        })
        .catch(err=>{
            res.status(400).send(err)
        })
    })

    //going to have an edit comment
    router.put('/api/comments/:id', (req,res)=>{
        comments.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(comment=>{
            res.status(200).send({message:'successfully updated'}, comment)
        })
        .catch(err=>{
            res.status(400).send(err)
        })
    })

    //a destroy comment

router.delete('/api/comments/:id', (req,res)=>{
    Comments.findByIdAndRemove(req.params.id)
    .then(comment=>{
        res.status(200).send({message: 'successfuly destroyed'}, comment)
})
})

    module.exports = {router}
