const mongoose = require('mongoose')

const Collection = mongoose.Schema(
    {
        image: {
            type: String,
        },
        title: {
            type: String,
        },
        subtitle: {
            type: String
        },
        price: {
            type: Number
        },
        qty: {
            type: Number
        }
    },
    {
        timestamps: true
    }
)

const collection = mongoose.model('products', Collection);

module.exports = collection;