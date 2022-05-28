const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: String,
        trim:true
    },
    description: {
        type: String,
        required: true,
        trim:true
    },
    price: {
        type: Number,
        required: true,
    },
    currencyId: {
        type: String,
        required: true
    },
    currencyFormat: {
        type: String,
        required: true
    },
    isFreeShipping: {
        type: Boolean,
        default: false
    },
    productImage: {
        type: String,
        required: true
    },  // s3 link

    style: { type: String, trim:true },

    availableSizes: {
        type: [String],
<<<<<<< HEAD
        //trim: true,
        enum: ["S", "XS", "M", "X", "L", "XXL", "XL"]
=======
        required: true,
        trim: true
        // enum: ['S', 'XS', 'M', 'X', 'L', 'XXL', 'XL']
>>>>>>> bca27c91bbd4fa00dd2244c8652d565331ae397a
    },

    installments: { type: Number },
    
    deletedAt: {
        type: Date
        //default: null
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model('product', productSchema);