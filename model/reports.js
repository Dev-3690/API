const mongoose = require('mongoose')
  
const Collection = mongoose.Schema(
    {
        status: {
            type: Boolean,
        },
        current: {
            type: Number,
        },
        voltage: {
            type: Number,
        },
        date: {
            type: String,
        },
        moisture: {
            type: Number,
        },
        temp: {
            type: Number,
        },
        water: {
            type: Number,
        },
        npk: {
            type: Number,
        }
    },
    {
        timestamps: true
    }
)

const collection = mongoose.model('reports', Collection);

module.exports = collection;