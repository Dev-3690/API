const mongoose = require('mongoose')
  
const Collection = mongoose.Schema(
    {
        water1: {
            type: String,
        },
        water2: {
            type: String,
        },
    },
    {
        timestamps: true
    }
)

const collection = mongoose.model('sensor', Collection);

module.exports = collection;