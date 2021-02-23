const express = require('express');

const Todo = require('../models/todo.model');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {

         const todoData = await Todo.find();

        res.render('index',{data:todoData});

    } catch (err) {
        next(err);
    }
})


router.post("/todo",  async(req, res,next ) => {
    
    try {
        console.log(req.body);
        const ToDo = new Todo({
            todo: req.body.work,
            postedAt:req.body.date
        })

        const result = await ToDo.save();
        res.redirect('/');
            
    } catch (err) {
        next(err);
        }
      
        
  
})


router.post('/search', async (req, res, next) => {
    try {
        const { search } = req.body;
        const data =await Todo.findOne({
            todo:search
        })
        res.render('search',{data:data})
    } catch (err) {
        next(err);
    }
})


router.get('/deleteTodo/:id', async(req, res) => {
    const id = req.params.id;
    const result = await Todo.findOneAndDelete(id);

    res.redirect('/');
})

module.exports = router;

