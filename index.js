const express = require('express')
const places = require('./model/places')
const user = require('./model/user')

const app = new express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
let cors = require('cors')
app.use(cors())
app.get('/',async (req,res)=>{
    const result = await places.find()
    console.log(result)
    res.json(result)
})

app.listen(5000)