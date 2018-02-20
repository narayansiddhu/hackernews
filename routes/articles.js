const express = require('express');
//uses it to get a Router object and then adds a couple of 
//routes to it using the get() method. 
//Last of all the module exports the Router object
const router = express.Router();

 let comment = require('../models/comment');
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
    if(err) res.json(err);
    else res.redirect('/');
    
});
    
});
// CREATE Comment
router.post('/posts/:articleId', function (req, res) {
    // INSTANTIATE INSTANCE OF MODEL
    const comment = new Comment(req.body)
  
    // SAVE INSTANCE OF Comment MODEL TO DB
    comment.save().then((comment) => {
      // REDIRECT TO THE ROOT
      return res.redirect(`/`)
    }).catch((err) => {
      console.log(err);
    })
  })


module.exports = router;