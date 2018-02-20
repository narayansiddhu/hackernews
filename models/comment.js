var mongoose = require('mongoose');
var CommentSchema = mongoose.Schema({
   content: 
   { 
       type: String, 
       required: true 
    }
});

// module.exports = mongoose.model('Comment', CommentSchema)

var Comment = module.exports =mongoose.model('Comment', CommentSchema);

