const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    }, 
    orderReference: {
        type: String,
        required: true,
    },
    articleItem: {
        type: String,
        required: true,
    },
     totalAmount: {
        type: Number,
        required: true,
        unique: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);