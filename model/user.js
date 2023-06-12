const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sahilpk81:miniproject@cluster0.krj7wos.mongodb.net/?retryWrites=true&w=majority')
const Schema = mongoose.Schema
const userSchema = new Schema({
    userEmail:String,
    userName:String,
    userFullName:String,
    userPassword:String,
})

userInfo = mongoose.model("users",userSchema)
module.exports = userInfo

