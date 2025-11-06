const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    modele: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        default:'C:/Users/%userprofile%/Downloads',
    },
    price: {
        type: Number,
        required: true,
        unique: true
    },
    
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);