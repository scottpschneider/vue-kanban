var router = require('express').Router()
    var Tasks = require('../models/task')

   //get task by id or get all tasks
    router.get('/api/tasks/:id?', (req, res)=>{
        if(req.params.id){
            Tasks.findById(req.params.id)
                .then(task=>{
                    return res.status(200).send(task)
                })
                .catch(err=>{
                    res.status(400).send(err)
                })
        }
        Tasks.find(req.query)
        .then(tasks=>{
            res.status(200).send(tasks)
        })
        .catch(err=>{
            res.status(400).send(err)
        })
    })

    //to create a task
    router.post('/api/tasks', (req, res)=>{
        Tasks.create(req.body)
        .then(newTask=>{
            res.status(200).send(newTask)
        })
        .catch(err=>{
            res.status(400).send(err)
        })
    })

    //going to have an edit task
    router.put('/api/tasks/:id', (req,res)=>{
        tasks.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(task=>{
            res.status(200).send({message:'successfully updated'}, task)
        })
        .catch(err=>{
            res.status(400).send(err)
        })
    })

    //a destroy task

router.delete('/api/tasks/:id', (req,res)=>{
    Tasks.findByIdAndRemove(req.params.id)
    .then(task=>{
        res.status(200).send({message: 'successfuly destroyed'}, task)
    })
})

    module.exports = {router}
