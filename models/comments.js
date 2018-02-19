var mongoose = require('mongoose');
var commentSchema = new Schema({
    author: 
    { 
        type: Schema.Types.ObjectId,
        ref: 'user' 
    },
    comment: 
    {
        type: String
    },
    created: 
    {
        type: Date, 
        default: Date.now
    },
    blog:
     {
           type: Schema.Types.ObjectId,
           ref: 'blog'
     }
});

var Comment = module.exports =mongoose.model('Comment', commentSchema);

