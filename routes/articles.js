const express = require('express');
//uses it to get a Router object and then adds a couple of 
//routes to it using the get() method. 
//Last of all the module exports the Router object
const router = express.Router();
// Article Model
let Article = require('../models/links');
// User Model
//let User = require('../models/user');
router.get('/add',function(req,res){
    res.render('add_articles',{
        title:'Add Articles'
    })
})
router.post('/add', function(req, res){
Article({
    link: req.body.titles,
    author:req.body.bodies
}).save(function(err,doc){
    if(err)res.json(err);
    else res.send('success');
});
    
});
module.exports = router;