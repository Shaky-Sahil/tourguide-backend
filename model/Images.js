const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sahilpk81:miniproject@cluster0.krj7wos.mongodb.net/?retryWrites=true&w=majority')
const Schema = mongoose.Schema
const imagesSchema = new Schema({
    "placeName":String,
    "filename": String,
    "image_data": Boolean
},
{ collection : 'images_collection' })

imageInfo = mongoose.model("images_collection",imagesSchema)

module.exports = imageInfo

