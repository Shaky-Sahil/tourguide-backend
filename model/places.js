const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sahilpk81:miniproject@cluster0.krj7wos.mongodb.net/?retryWrites=true&w=majority')
const Schema = mongoose.Schema
const placesSchema = new Schema({
    placeName: String,
    placeCategory: String,
    city:String,
    lat: Number,
    lon: Number
})

placeInfo = mongoose.model("places",placesSchema)

/*placeInfo.insertMany([
    {placeName:'Jatayu',placeCategory:'Hills/Mountains',city:'trivandrum',lat:8.8607,lon:76.8671},
    {placeName:'Judgekunnu',placeCategory:'Hills/Mountains',city:'trivandrum',lat:8.4501,lon:76.9621},
    {placeName:'Agastya Mala',placeCategory:'Hills/Mountains',city:'trivandrum',lat:8.6163,lon:77.2460},
    {placeName:'Kadumbu Hills',placeCategory:'Hills/Mountains',city:'trivandrum',lat:8.674519,lon:77.1633},
    {placeName:'Napier Museums',placeCategory:'Monuments/Palaces/Museums/Architectural Buildings',city:'trivandrum',lat:8.509,lon:76.9552},
    {placeName:'Space Museum',placeCategory:'Monuments/Palaces/Museums/Architectural Buildings',city:'trivandrum',lat:8.542928,lon:76.863472},
    {placeName:'Kuthiramalika',placeCategory:'Monuments/Palaces/Museums/Architectural Buildings',city:'trivandrum',lat:8.4819,lon:76.9452},
    {placeName:'Kanakakunnu Palace',placeCategory:'Monuments/Palaces/Museums/Architectural Buildings',city:'trivandrum',lat:8.51878,lon:76.94253},
    {placeName:'Sri Chitra Art Gallery',placeCategory:'Monuments/Palaces/Museums/Architectural Buildings',city:'trivandrum',lat:8.510978,lon:76.955755},
    {placeName:'Sri Chitra Art Gallery',placeCategory:'Monuments/Palaces/Museums/Architectural Buildings',city:'trivandrum',lat:8.5100,lon:76.9465},
    {placeName:'Kowdiar Palace',placeCategory:'Monuments/Palaces/Museums/Architectural Buildings',city:'trivandrum',lat:8.5239,lon:76.9633},
    {placeName:'GreenField Stadium',placeCategory:'Monuments/Palaces/Museums/Architectural Buildings',city:'trivandrum',lat:8.572344136,lon: 76.8844076},
]).then(function(){
    console.log("Data inserted")  // Success
})*/



module.exports = placeInfo

