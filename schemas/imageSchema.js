const mongoose = require("mongoose");
const imageSchema = mongoose.Schema({
    URL:{
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true
    }

},{
    timestamp: true
})

module.exports = mongoose.model("image",imageSchema);