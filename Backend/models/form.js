const mongoose = require(`mongoose`)

const Schema = mongoose.Schema
const formSchema = new Schema({
    name:{
        type: String,
        required: true
        
    },
    email:{
        type: String,
        required: true
    },
    summary:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model(`user`, formSchema)