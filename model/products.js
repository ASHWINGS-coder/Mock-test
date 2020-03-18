const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
});

module.exports = mongoose.model('product',productSchema);