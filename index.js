const express = require('express')
const places = require('./model/places')
const user = require('./model/user')
const signupRouter = require('./controllers/register')
const loginRouter = require('./controllers/login')


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

app.use('/api/signup', signupRouter)
app.use('/api/login', loginRouter)

app.listen(5000)