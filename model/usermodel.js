const mongoose = require('mongoose')

const Collection = mongoose.Schema(
    {
        name: {
            type: String,
        },
        contact: {
            type: Number,
        },
        email: {
            type: String
        }

    },
    {
        timestamps: true
    }
)

const collection = mongoose.model('collection2', Collection);

module.exports = collection;