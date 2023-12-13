const mongoose = require('mongoose')

const Collection = mongoose.Schema(

    {
        start: {
            type: String,
        },
        end: {
            type: String,
        },
        isOn: {
            type: Boolean
        }
    },
    {
        timestamps: true
    }
)

const collection = mongoose.model('Schedule', Collection);

module.exports = collection;