const mongoose = require('mongoose');
var validator = require("email-validator");

var productSchema = new mongoose.Schema({
   name: {
        type: String,
        required: 'This field is required'
    },
    price: {
        type: String
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    store:{
        type: String
    },
    category:{
        type: String
    }
})

// custom validation for email

// productSchema.path('email').validate((val) => {
//     return validator.validate(val);
// }, 'Invalid Email');

mongoose.model('Product', productSchema);