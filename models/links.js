var mongoose = require('mongoose');

var linksschema= mongoose.Schema({
link:{
    type: String,
    required: true

},
author:{
    type: String,
    required:true
}
});
var Links = module.exports = mongoose.model('Links',linksschema);