
var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hackernews');

var db = mongoose.connection;

db.once('open', function(){
    console.log('Connected to the data');
})
db.on('error',function(){
    console.log(err);
})
var app = express();


var Links = require('./models/links');
// creating the view engine 
 app.set('view engine','ejs');
 app.set('views',path.join(__dirname,'views'));

//setting the default body parser middle ware 
 app.use(bodyparser.json());
 app.use(bodyparser.urlencoded({extended: false}));


//seeting the route to main page 
app.get('/',function(req,res){
    Links.find({},function(err,links){
        if(err){
            console.log('this is failed');

        }else{
            res.render('index',{
                title : 'Welcome to the Hackernews',
                links:links
            })
        }
    })
});
var articles = require('./routes/articles');
app.use('/articles', articles);


app.listen('3000',function(){
    console.log("this is connected");
});